/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import { CategoriesListing } from '@betsson-sportsbook-monorepo/sb-ui-components';
import { GiphyList } from './giphy-search/GiphyList';
import { useDispatch } from 'react-redux';
import { searchGiphiesStart } from '@betsson-sportsbook-monorepo/data-access-giphy';

export function NxWelcome({ title }: { title: string }) {
  const dispatch = useDispatch()
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(searchGiphiesStart(e.target.value))
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html:`
            .input-field {
            font-size: 20px;
            vertical-align: middle;
            transition: .5s;
            border-width: 1px;
            margin: 5px;
            border-color: #f1f1f1;
            width: 50%;
            margin: 50px 0;
            padding: 8px 0;
          }

          .input-field:focus {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            outline: none;
          }

          .input-field:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
          }
        `
      }} />
      <div>
        <input className='input-field' onChange={handleInput} />
        <GiphyList />
      </div>
    </>
  );
}

export default NxWelcome;
