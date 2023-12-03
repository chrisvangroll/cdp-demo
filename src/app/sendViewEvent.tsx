import { Engage } from '@sitecore/engage';

const sendPageViewEvent = async (engage: Engage, currentUrl: string) => {
  const eventData = {
    channel: 'WEB',
    currency: 'USD',
    pointOfSale: 'ngc',
    language: 'EN',
    page: currentUrl,
  };

  engage.pageView(eventData);
};

export default sendPageViewEvent;
