import React from "react";
import logo from '../logo.svg'
import './AboutUs.scss'
import config from '../config.json'
import { FaPlus } from 'react-icons/fa';

const Content = () => {
  const clickHandler = () => {
    if (config.form_url) {
      window.location.href = config.form_url
    }
  }

  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="image"><img src={logo} alt=""/></div>
          <div className="logo">イエメシ</div>
        </div>

        <p>イエメシはテイクアウトに対応しているお店を紹介するためのアプリです。<a href="https://github.com/iemeshi/app">オープンソース</a>で開発されています。</p>

        <h2>{config.title}版について</h2>
        <p>{config.title}版は以下のリポジトリで開発されています。</p>
        <p><a href={config.repository}>{config.repository}</a></p>

        {config.form_url?
          <>
            <p>データの追加や修正をご希望の方は以下のフォームをご利用ください。</p>
            <p><a href={config.form_url}>データの登録/更新申請フォーム</a></p>
          </>
          :
          <></>
        }

        <h2>イエメシに関するお問い合わせ</h2>

        {config.contact_url?
          <>
            <p>{config.title}版に関するお問い合わせはお問い合わせフォームよりお願いいたします。</p>
            <p><a href={config.contact_url}>お問い合わせフォーム</a></p>
          </>
          :
          <></>
        }

        <p>イエメシのマップ情報は【Geolonia】を使用しています。【Geolonia】に関するお問い合わせは<a href="https://geolonia.com/contact/">こちら</a>からどうぞ。</p>
        <p>掲載されている情報に関しましては、各店舗様にお問い合わせください。</p>

        {config.form_url?
          <>
            <div className="goto-form"><button><FaPlus color="#FFFFFF" onClick={clickHandler} /></button></div>
          </>
          :
          <></>
        }
      </div>
    </div>
  );
};

export default Content;
