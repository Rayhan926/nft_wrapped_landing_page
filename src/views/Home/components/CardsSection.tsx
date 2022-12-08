/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const CardsSection = () => {
  return (
    <section className="-mt-[230px] relative z-[5] lg:-mt-[200px]">
      <div className="container">
        {/** Your year in review  --Start-- */}
        <div className="text-center flex flex-col items-center gap-6 mb-12 lg:mb-16">
          <p className=" text-[28px] lg:text-4xl font-bold">
            Your year in review <span className="lg:hidden">→</span>
          </p>
          <svg
            width="18"
            height="37"
            viewBox="0 0 18 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden lg:block"
          >
            <path
              d="M9 37L17.6603 22H0.339746L9 37ZM7.5 0L7.5 23.5H10.5L10.5 0L7.5 0Z"
              fill="white"
            />
          </svg>
        </div>
        {/** Your year in review  --End-- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-4 xl:gap-10">
          {/** Card 1 --Start-- */}
          <div className="__card xl:pb-[90px] bg-[url('/img/card_1_bg.svg')]">
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
          <div className="__card xl:pb-[80px] bg-[url('/img/card_2_bg.svg')]">
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
            <div className="absolute top-10 -right-8 md:right-0 md:top-0 max-w-[230px] md:max-w-[auto]">
              <Image
                src={"/img/circular_nft.png"}
                width={400}
                height={400}
                alt="circular_nft"
              />
            </div>
            {/** Circular Nft --End-- */}
            <h3 className="__card_title_lg relative z-[2]">2.5Ξ</h3>
            <p className="__card_title_sm">Renga #4213</p>
            <h2 className="__card_title_md mt-auto max-w-[500px] relative z-[2]">
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
          <div className="__card xl:pb-[90px] bg-[url('/img/card_4_bg.svg')]">
            <div className="absolute right-5 bottom-[18%] lg:bottom-[32%] max-w-[160px] lg:max-w-[auto]">
              <Image
                src={"/img/circular_nft.png"}
                width={228}
                height={228}
                alt="circular_nft"
              />
            </div>

            <h2 className="__card_title_md max-w-[400px] relative z-[2]">
              Best Single NFT ROI
            </h2>
            <p className="__card_body_text relative z-[2]">
              TO THE MOON! Those are some impressive returns. You should be
              proud of yourself! We are.
            </p>
            <div>
              <button className="__card_share_btn relative z-[2]">Share</button>
            </div>
            <p className="__card_title_sm mt-auto mb-6">Renga #4213</p>
            <h3 className="__card_title_xl">+300%</h3>
          </div>
          {/** Card 4 --End-- */}

          {/** Card 5 --Start-- */}
          <div
            // style={{ gridColumn: "span 2" }}
            className="__card w-full md:col-span-2 md:aspect-[10/5] grid grid-cols-1 md:grid-cols-[auto,350px] lg:grid-cols-[auto,500px] xl:grid-cols-[auto,550px] 2xl:grid-cols-[auto,650px] p-0"
          >
            <div className="px-[30px] py-[40px] md:p-10 xl:p-[70px] flex flex-col">
              <h3 className="__card_title_xl tiger_nft_gradient_text leading-[100px] lg:leading-[160px]">
                0.01%
              </h3>
              <p className="__card_title_sm md:mt-3 mb-10 md:mb-0 opacity-80">
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
              <img
                src="/img/tiger_nft.jpg"
                alt="tiger_nft"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/** Card 5 --End-- */}

          {/** Card 6 --Start-- */}
          <div className="__card xl:pb-[90px] bg-[url('/img/card_5_bg.svg')]">
            <div className="absolute right-7 bottom-7 lg:right-11 lg:bottom-11 max-w-[125px] lg:max-w-[auto]">
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
            <div className="md:translate-y-3 xl:translate-y-6 mt-auto">
              <p className="__card_title_sm">Renga #4213</p>
              <h3 className="__card_title_xl md:my-3 lg:my-5">225</h3>
              <p className="__card_title_sm">NFTs Collected</p>
            </div>
          </div>
          {/** Card 6 --End-- */}

          {/** Card 7 --Start-- */}
          <div className="__card xl:pb-[80px] xl:pt-[100px] bg-[url('/img/card_6_bg.svg')]">
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
          <div className="__card w-full md:col-span-2 md:aspect-[10/6.5] 2xl:aspect-[10/5] grid grid-cols-1 md:grid-cols-2 p-0">
            <div>
              <img
                src="/img/tiger_nft.jpg"
                alt="tiger_nft"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-[30px] py-[40px] md:p-10 2xl:p-[70px] flex flex-col">
              <h3 className="__card_title_xl tiger_nft_gradient_text leading-[100px] lg:leading-[160px]">
                3 Years
              </h3>
              <p className="__card_title_sm mt-5 opacity-80">Renga #4213</p>

              <h2 className="__card_title_md mt-7 md:mt-[73px]">
                Diamond Hands
              </h2>
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

        {/** 3 Column Grid --Start-- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-4 xl:gap-10 mt-5 lg:mt-4 xl:mt-10">
          {/** Card 9 --Start-- */}
          <div className="__card xl:px-12 lg:aspect-[3/5] xl:aspect-[3/4.5] bg-cover bg-[url('/img/card_9_bg.svg')]">
            <h2 className="__card_title_md">Total NFTs Minted in 2022</h2>
            <p className="__card_body_text">
              You’ve been putting in work this year! The total NFTs you minted
              in 2022 is (insert number). Will you beat that in 2023?
            </p>
            <div>
              <button className="__card_share_btn">Share</button>
            </div>

            <h3 className="__card_title_lg lg:text-[100px] lg:leading-[112px] 2xl:text-[130px] 2xl:leading-[132px] mt-auto">
              2,212
            </h3>
          </div>
          {/** Card 9 --End-- */}

          {/** Card 10 --Start-- */}
          <div className="__card xl:px-12 lg:aspect-[3/5] xl:aspect-[3/4.5] bg-cover bg-[url('/img/card_10_bg.svg')]">
            <h2 className="__card_title_md">Total Gas Spent in 2022</h2>
            <p className="__card_body_text">
              Wow! PoS couldn’t have come sooner could it? With what you spent
              on gas this year you could have bought (Tesla, trip to dubai, some
              fun NFT project.)
            </p>
            <div>
              <button className="__card_share_btn">Share</button>
            </div>

            <h3 className="__card_title_lg lg:text-[100px] lg:leading-[112px] 2xl:text-[130px] 2xl:leading-[132px] mt-auto">
              1000Ξ
            </h3>
          </div>
          {/** Card 10 --End-- */}

          {/** Card 11 --Start-- */}
          <div className="__card xl:px-12 lg:aspect-[3/5] xl:aspect-[3/4.5] bg-cover bg-[url('/img/card_11_bg.svg')]">
            <h2 className="__card_title_md">Total NFTs Sold in 2022</h2>
            <p className="__card_body_text">
              In total, you sold (insert number) of NFTs this year. We hope you
              put that capital to good work!
            </p>
            <div>
              <button className="__card_share_btn">Share</button>
            </div>

            <h3 className="__card_title_lg lg:text-[100px] lg:leading-[112px] 2xl:text-[130px] 2xl:leading-[132px] mt-auto">
              365
            </h3>
          </div>
          {/** Card 11 --End-- */}
        </div>
        {/** 3 Column Grid --End-- */}
      </div>
    </section>
  );
};

export default CardsSection;
