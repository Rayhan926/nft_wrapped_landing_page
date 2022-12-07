/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const CardsSection = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2 gap-10">
          {/** Card 1 --Start-- */}
          <div className="__card pb-[90px] bg-[url('/img/card_1_bg.svg')]">
            <h2 className="__card_title_md">Overall Portfolio Return</h2>
            <p className="__card_body_text">
              What bear market? While everyone was getting rekt in stocks and
              crypto, you managed to earn those gains in the NFT market. Now
              tell us what sniper tool you used!{" "}
            </p>
            <div>
              <button className="__card_share_btn">Share</button>
            </div>

            <h3 className="__card_title_xl text-right mt-auto">+300%</h3>
          </div>
          {/** Card 1 --End-- */}

          {/** Card 2 --Start-- */}
          <div className="__card pb-[80px] bg-[url('/img/card_2_bg.svg')]">
            <h3 className="__card_title_xl">2,022</h3>
            <h2 className="__card_title_md mt-auto">
              Total Number of NFTS in Portfolio
            </h2>
            <p className="__card_body_text">
              That’s right, while you were sweeping floors, we were keeping
              score! Your total NFTs for 2022 is (insert number).
            </p>
            <div>
              <button className="__card_share_btn">Share</button>
            </div>
          </div>
          {/** Card 2 --End-- */}

          {/** Card 3 --Start-- */}
          <div className="__card pb-[80px] bg-[url('/img/card_3_bg.svg')]">
            {/** Circular Nft --Start-- */}
            <div className="absolute right-0 top-0">
              <Image
                src={"/img/circular_nft.png"}
                width={400}
                height={400}
                alt="circular_nft"
              />
            </div>
            {/** Circular Nft --End-- */}
            <h3 className="__card_title_lg">2.5Ξ</h3>
            <p className="text-[32px] font-bold mt-2">Renga #4213</p>
            <h2 className="__card_title_md mt-auto max-w-[500px]">
              Most Valuable NFT You Own
            </h2>
            <p className="__card_body_text">
              Even if all your other NFTs were rugpulls and duds, you had one
              NFT that stood out!
            </p>
            <div>
              <button className="__card_share_btn">Share</button>
            </div>
          </div>
          {/** Card 3 --End-- */}

          {/** Card 4 --Start-- */}
          <div className="__card pb-[90px] bg-[url('/img/card_4_bg.svg')]">
            <div className="absolute right-5 top-[40%]">
              <Image
                src={"/img/circular_nft.png"}
                width={228}
                height={228}
                alt="circular_nft"
              />
            </div>

            <h2 className="__card_title_md max-w-[400px]">
              Best Single NFT ROI
            </h2>
            <p className="__card_body_text">
              TO THE MOON! Those are some impressive returns. You should be
              proud of yourself! We are.
            </p>
            <div>
              <button className="__card_share_btn">Share</button>
            </div>
            <p className="text-[32px] font-bold mt-auto mb-2">Renga #4213</p>
            <h3 className="__card_title_xl">+300%</h3>
          </div>
          {/** Card 4 --End-- */}

          {/** Card 5 --Start-- */}
          <div
            style={{ gridColumn: "span 2" }}
            className="__card w-full aspect-[10/5] grid grid-cols-[auto,650px] p-0"
          >
            <div className="p-[70px] flex flex-col">
              <h3 className="__card_title_xl tiger_nft_gradient_text leading-[160px]">
                0.01%
              </h3>
              <p className="text-[32px] font-bold mt-3 opacity-80">
                Renga #4213
              </p>

              <h2 className="__card_title_md max-w-[400px] mt-auto">
                Rarest NFT in Collection
              </h2>
              <p className="__card_body_text">
                Out of millions of NFTs, you’ve managed to find a diamond in the
                rough.
              </p>
              <div>
                <button className="__card_share_btn">Share</button>
              </div>
            </div>
            <div>
              <img src="/img/tiger_nft.jpg" alt="tiger_nft" />
            </div>
          </div>
          {/** Card 5 --End-- */}

          {/** Card 6 --Start-- */}
          <div className="__card pb-[90px] bg-[url('/img/card_5_bg.svg')]">
            <div className="absolute right-11 bottom-11">
              <Image
                src={"/img/circular_nft_2.png"}
                width={300}
                height={300}
                alt="circular_nft_2"
              />
            </div>

            <h2 className="__card_title_md max-w-[550px]">
              Collection You Own the Most of
            </h2>
            <p className="__card_body_text">
              It’s not often that you find a project that you really believe in.
              But it seems you have found one worthy of (number) of NFTs. The
              question is, are you the biggest supporter? Share with your
              community and find out!
            </p>
            <div>
              <button className="__card_share_btn">Share</button>
            </div>
            <div className="translate-y-9 mt-auto">
              <p className="text-[28px] font-semibold mb-5">Renga #4213</p>
              <h3 className="__card_title_xl">225</h3>
              <p className="text-[28px] font-semibold mt-3">NFTs Collected</p>
            </div>
          </div>
          {/** Card 6 --End-- */}

          {/** Card 7 --Start-- */}
          <div className="__card pb-[80px] pt-[100px] bg-[url('/img/card_6_bg.svg')]">
            <h3 className="__card_title_xl">-99.9%</h3>
            <h2 className="__card_title_md max-w-[400px] mt-auto">
              You’ve Been Rugged!
            </h2>
            <p className="__card_body_text">
              So you’ve been rugged. Welcome to the club! The rugged support
              group meets every day on Twitter. You’ll recognize your fellow
              rugged mates by their slogan, “GM.” May your 2023 be filled with
              fewer rugs.
            </p>
            <div>
              <button className="__card_share_btn">Share</button>
            </div>
          </div>
          {/** Card 7 --End-- */}

          {/** Card 8 --Start-- */}
          <div
            style={{ gridColumn: "span 2" }}
            className="__card w-full aspect-[10/5] grid grid-cols-2 p-0"
          >
            <div>
              <img
                src="/img/tiger_nft.jpg"
                alt="tiger_nft"
                className="w-full"
              />
            </div>

            <div className="p-[70px] flex flex-col">
              <h3 className="__card_title_xl tiger_nft_gradient_text leading-[160px]">
                3 Years
              </h3>
              <p className="text-[32px] font-bold mt-3 opacity-80">
                Renga #4213
              </p>

              <h2 className="__card_title_md mt-[73px]">Diamond Hands</h2>
              <p className="__card_body_text">
                While everyone was flipping floors or selling too early, you
                found a project you really connected with! Or you’re just left
                holding a bag you can’t get rid of. Either way, (insert the
                amount of time) is a great achievement! Be proud of yourself.
                HODL on!
              </p>
              <div>
                <button className="__card_share_btn">Share</button>
              </div>
            </div>
          </div>
          {/** Card 8 --End-- */}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
