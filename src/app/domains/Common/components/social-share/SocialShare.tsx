import { FC } from 'react';
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share';
import { SocialShareProps } from './types';

const SocialShare: FC<SocialShareProps> = ({
  url,
  title,
  whatsApp = true,
  facebook = false,
  twitter = false,
  telegram = false,
  size = 32,
}) => {
  return (
    <div className="flex h-auto my-2">
      {facebook && (
        <FacebookShareButton url={url} quote={title} className="mx-1">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      )}

      {twitter && (
        <TwitterShareButton url={url} title={title} className="mx-1">
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      )}

      {whatsApp && (
        <WhatsappShareButton url={url} title={title} className="mx-1">
          <WhatsappIcon size={size} round />
        </WhatsappShareButton>
      )}

      {telegram && (
        <TelegramShareButton url={url} title={title} className="mx-1">
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      )}
    </div>
  );
};

export default SocialShare;
