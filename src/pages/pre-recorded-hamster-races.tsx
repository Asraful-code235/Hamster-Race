import HamsterBetCard from '../components/hamster-bet-card';

export default function PreRecordedHamsterRacesPage() {
  return (
    <div className='px-8 py-14  '>
      <div className='mx-auto'>
        <iframe
          className='mx-auto w-full lg:w-6/12 h-[350px] lg:h-[500px]'
          src='https://www.youtube.com/embed/xiJEESddB5A?si=SBKiHm2PQlF4xVpQ&controls=0&autoplay=1'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
      <HamsterBetCard />
    </div>
  );
}
