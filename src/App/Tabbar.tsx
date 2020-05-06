import React from "react";
import './Tabbar.scss'
import config from '../config.json'

import { FaList, FaHome, FaUtensils } from "react-icons/fa"
import { GiJapan } from "react-icons/gi"
import { AiOutlineAppstore } from "react-icons/ai"

const Content = () => {
  return (
    <div className="tabbar">
      <ul>
        <li><a href="/#"><div className="icon"><FaHome /></div><div className="text">ホーム</div></a></li>
        <li><a href="/#list"><div className="icon"><FaList /></div><div className="text">お店一覧</div></a></li>
        {config.gallery_url?
          <>
            <li><a href="/#gallery"><div className="icon"><FaUtensils /></div><div className="text">料理から探す</div></a></li>
          </>
          :
          <></>
        }
        <li><a href="https://iemeshi.jp/"><div className="icon"><GiJapan /></div><div className="text">全国で探す</div></a></li>
        <li><a href="/#about"><div className="icon"><AiOutlineAppstore /></div><div className="text">イエメシとは</div></a></li>
      </ul>
    </div>
  );
};

export default Content;
