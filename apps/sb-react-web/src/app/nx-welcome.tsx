/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import { CategoriesListing } from '@betsson-sportsbook-monorepo/sb-ui-components';
import { GiphyList } from './giphy-search/GiphyList';

export function NxWelcome({ title }: { title: string }) {
  return (
    <div>
      <GiphyList />
    </div>
  );
}

export default NxWelcome;
