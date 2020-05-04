import React, { useCallback } from "react";
import './Galleries.scss'
import Gallery from "react-photo-gallery";
import Shop from './Shop'
import config from '../config.json'
import csvParser from 'csv-parse'

type Props = {
  data: Iemeshi.ShopData[];
}

const Content = (props: Props) => {
  const [ shop, setShop  ] = React.useState<Iemeshi.ShopData | undefined>()
  const [ photoList, setPhotoList ] = React.useState<Iemeshi.PhotoData[]>([])

  React.useEffect(() => {
    fetch(config.gallery_url)
    .then((response) => {
      return response.ok ? response.text() : Promise.reject(response.status);
    })
    .then((data) => {
      csvParser(data, async (error, data) => {
        if (error) {
          console.log(error)
          setPhotoList([])
          return
        }

        const [header, ...records] = data;

        const features = records.map((record: string) => {
          const properties = header.reduce((prev: any, column: any) => {
            const value = record[header.indexOf(column)];
            if (column === 'src') {
                prev[column] = value;
            } else {
                prev[column] = +value;
            }
            return prev;
          }, {});

          return properties;
        });

        const nextPhotoList: Iemeshi.PhotoData[] = []
        for (let i = 0; i < features.length; i++) {
          const feature = features[i] as Iemeshi.PhotoData
          if (!feature['src'] || !feature['width'] || !feature['height']) {
            continue;
          }
          const photo = {
              index: i,
            ...feature
          }
          nextPhotoList.push(photo)
        }
        // 結果をシャッフル
        for (let i = nextPhotoList.length - 1; i > 0; i--) {
          const r = Math.floor(Math.random() * (i + 1));
          const tmp = nextPhotoList[i];
          nextPhotoList[i] = nextPhotoList[r];
          nextPhotoList[r] = tmp;
        }
        setPhotoList(nextPhotoList)
      });
    });
  }, [])

  const closeHandler = () => {
    setShop(undefined)
  }

  const clickHandler = useCallback((event, { photo, index }) => {
    if (photo.shop) {
      setShop(props.data[photo.shop])
    }
}, [props.data]);

  return (
    <div className="gallery">
      <Gallery photos={photoList} onClick={clickHandler} />
      {shop?
        <Shop shop={shop} close={closeHandler} />
        :
        <></>
      }
    </div>
  );
}

export default Content;
