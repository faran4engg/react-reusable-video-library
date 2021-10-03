import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FeedBackForm from 'app/domains/Common/components/feedback-form/FeedbackForm';
import { Modal } from 'app/domains/Common/components/modal';

const FeedbackPage = () => {
  const [showModalOnSuccess, setShowModalOnSuccess] = useState(false);

  return (
    <>
      <Helmet>
        <title>Feedback | Islaamify360</title>
      </Helmet>
      <section className="px-1 py-3">
        <h2 className="mb-4 text-2xl font-semibold text-center ">
          Feel free to share your views/feedbacks/opinions 💖
        </h2>
        <div className="w-full max-w-2xl p-5 m-auto rounded-lg shadow-md bg-light-mode dark:bg-dark-mode">
          <FeedBackForm setShowModalOnSuccess={setShowModalOnSuccess} />
          {showModalOnSuccess && (
            <Modal showModal={setShowModalOnSuccess} isFeedbackForm={true}>
              <p className="text-1xl">Jazakallah for your feedback 💖 </p>
            </Modal>
          )}
        </div>
      </section>
    </>
  );
};

export default FeedbackPage;
