import React from "react";
import './Tabbar.scss'
import config from '../config.json'

import { FaList, FaHome, FaUtensils, FaFontAwesomeFlag } from "react-icons/fa"
import { AiOutlineAppstore } from "react-icons/ai"

const Content = () => {
  return (
    <div className="tabbar">
      <ul>
        <li><a href="/#"><div className="icon"><FaHome /></div><div className="text">ホーム</div></a></li>
        <li><a href="/#special"><div className="icon"><FaFontAwesomeFlag /></div><div className="text">特集ページ</div></a></li>
        <li><a href="/#list"><div className="icon"><FaList /></div><div className="text">お店一覧</div></a></li>
        {config.gallery_url?
          <>
            <li><a href="/#gallery"><div className="icon"><FaUtensils /></div><div className="text">料理から探す</div></a></li>
          </>
          :
          <></>
        }
        <li><a href="/#about"><div className="icon"><AiOutlineAppstore /></div><div className="text">イエメシとは</div></a></li>
      </ul>
    </div>
  );
};

export default Content;
