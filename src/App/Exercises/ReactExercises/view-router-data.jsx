import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactOnClickRouterData } from './ReactOnClick/router-data';
import { ReactOnChangeMetaData } from './ReactOnChange/router-data';
import { ReactIfStatementsMetaData } from './ReactIfStatements/router-data';
import { ReactGuessNumberMetaData } from './ReactGuessNumber/router-data';
import { ToDoWithServerMetaData } from './ToDoWithServer/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactOnClickRouterData,
  ReactOnChangeMetaData,
  ReactIfStatementsMetaData,
  ReactGuessNumberMetaData,
  ToDoWithServerMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
