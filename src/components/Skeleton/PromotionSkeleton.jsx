import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const responsive = {
  0: { items: 2.5 },
  389: { items: 2.5 },
  481: { items: 5 },
  1024: { items: 5 },
};

const renderDealItemSkeleton = () => {
  return Array(10)
    .fill(0)
    .map((ske, idx) => (
      <div
        className='flex flex-col w-[148px] h-[212px]'
        key={idx}
      >
        <div className='w-[124px] h-[124px] mt-3 bg-slate-200 animate-pulse'></div>
        <div className='w-[124px] h-[30px] mt-1 bg-slate-200 animate-pulse'></div>
        <div className='w-[124px] h-[20px] mt-1 mb-3 bg-slate-200 animate-pulse'></div>
      </div>
    ));
};
const PromotionSkeleton = () => {
  return (
    <section className='inline-block z-[9] w-full laptop:max-w-[73.75rem] '>
      <div className='flex flex-row  laptop:gap-2 items-center w-full h-[17rem]'>
        <div className='w-full h-full bg-white rounded laptop:max-w-[692px]'>
          {/* header */}
          <div className='flex justify-between items-center mt-[1rem] mb-[0.5rem] ml-[0.5rem] tablet:mx-[1rem]'>
            <div className='w-[50%] h-[28px] bg-slate-200 animate-pulse'></div>
            <div className='w-[30%] h-[28px] bg-slate-200 animate-pulse'></div>
          </div>
          {/* deal products */}
          <div className='flex flex-row justify-between items-center w-[670px] mx-[0.5rem] tablet:mx-[1rem]'>
            {/* item */}
            <AliceCarousel
              key={"dealProdusts"}
              mouseTracking
              items={renderDealItemSkeleton()}
              responsive={responsive}
              controlsStrategy='alternate'
              disableDotsControls
              disableButtonsControls
            />
          </div>
        </div>
        <div className='w-full h-full rounded object-cover hidden laptop:flex justify-center items-center max-w-[480px]'>
          <div className='w-[480px] h-[270px] bg-slate-200 animate-pulse'></div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSkeleton;
