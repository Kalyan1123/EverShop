import React from 'react';
import PageHeading from '@components/admin/cms/PageHeading';

export default function Heading() {
  return <PageHeading backUrl={null} heading="Widgets" />;
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
