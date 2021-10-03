import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="Islaamify 360 About Page" />
      </Helmet>
      <main className="text-light-mode-text dark:text-gray-400">
        <div className="flex items-center content-center justify-center px-1 py-3 ">
          <div className="container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 ml-auto mr-auto text-justify">
                <h2 className="text-3xl font-semibold text-center text-light-mode-text dark:text-dark-mode-text">
                  Let's make an Islamic Video Library 📚 Together !
                </h2>
                <p className="mt-4 text-lg">
                  Most of the time we get distracted with annoying video
                  suggestions in websites like YouTube, DailyMotion etc. We
                  always had a dream to build an online Islamic Video Library
                  where we get relevant islamic videos without any
                  distraction.&nbsp;
                  <strong
                    className="cursor-pointer text-theme-color-light dark:text-theme-color-dark"
                    onClick={() => history.push('/')}
                  >
                    Islaamify-360
                  </strong>
                  &nbsp;provides a way to look for videos on various topics that
                  you can search by tags / categories and speaker names.
                  <br /> <br />
                  The videos are updated by us and you. You can submit videos by
                  copying a link whenever we browse through any video streaming
                  website like YouTube. So if we find a good video link that is
                  not on&nbsp;
                  <strong
                    className="cursor-pointer text-theme-color-light dark:text-theme-color-dark"
                    onClick={() => history.push('/')}
                  >
                    Islaamify-360
                  </strong>
                  &nbsp;, please upload it from from our&nbsp;
                  <strong
                    className="cursor-pointer text-theme-color-light dark:text-theme-color-dark"
                    onClick={() => history.push('/upload')}
                  >
                    Upload Video
                  </strong>
                  &nbsp;page!
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="px-1 py-1">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full px-4">
                <h2 className="text-2xl font-semibold text-light-mode-text dark:text-dark-mode-text">
                  Who we are ?
                </h2>
                <p className="m-4 text-lg leading-relaxed">
                  We are software engineers who are striving to earn sawaab in
                  this life and in the hereafter.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-1 py-1">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full px-4">
                <h2 className="text-2xl font-semibold text-light-mode-text dark:text-dark-mode-text">
                  📥 Email / 💸 Donate
                </h2>
                <p className="m-4 text-lg leading-relaxed">
                  Please send an email to{' '}
                  <a
                    href="mailto:islaamify@gmail.com"
                    className="text-theme-color-light dark:text-theme-color-dark"
                  >
                    islaamify@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
