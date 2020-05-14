import React from "react";
import menu from '../menu02.svg'
import './Special.scss'

const Content = () => {
  return (
    <div className="special">
      <div className="container">
        <h2>『学校給食弁当』登場！</h2>
        <p>- 美濃市学校給食センター協力 -<br/>学校で人気の給食メニューが、お持ち帰り用のお弁当になりました。</p>

        <div className="image"><img src={menu} alt=""/></div>

        <p>新型コロナウィルス感染症の影響で臨時休校が続くなか、ご家庭でのお食事に『学校給食弁当』はいかがでしょうか？</p>
        <p>栄養バランスが考えられた美濃市学校給食センターのメニューを元に作られたお弁当です。大人の方にとっても昔なつかしいお味だと思いますので、この機会にぜひご賞味ください。</p>
        <p className="small">※学校給食センターがつくる給食（牛乳を除く）を参考に、各店舗がそれぞれ調理し販売しています。給食とまったく同じものではありませんので、あらかじめご了承ください。</p>

        <p>詳細は美濃市公式ホームページをご覧ください。</p>
        <p><a href="http://www.city.mino.gifu.jp/pages/47776">美濃市公式ホームページ</a></p>
      </div>
    </div>
  );
};

export default Content;
