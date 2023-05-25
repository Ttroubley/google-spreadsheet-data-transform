import { GoogleSpreadsheet } from 'google-spreadsheet';
import * as creds from './credentials.json';

const main = async () => {
  const document = new GoogleSpreadsheet(
    '1fGh9NecMSBVzrBS1UlHXXTyucjhDKaK7XisgCQQxzqE'
  );
  await document.useServiceAccountAuth(creds);
  await document.loadInfo();
  console.log(document.title);
};

void main();
