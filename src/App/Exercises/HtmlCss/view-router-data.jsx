import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { ExerciseMetaData } from './FloatsAndPositioning/router-data';
// import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { blockRouterMetaDataGoogleFonts } from './GoogleFonts/router-data';
import { blockRouterMetaDataCssAnimations } from './CssAnimations/router-data';
import { RouterMetaDataColors } from './Colors/router-data';
import { RouterMetaDataImageFiles } from './ImageFiles/router-data';
import { RouterMetaDataCssFilter } from './CssFilter/router-data';
import { RouterMetaDataMediaFiles } from './MediaFiles/router-data';
import { RouterMetaDataBoxModel } from './BoxModel/router-data';
import { RouterMetaDataHTMLTables } from './HTMLTables/router-data';
import { RouterMetaDataArrayRenderToTable } from './ArrayRenderToTable/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  ExerciseMetaData,
  // SelectorsAndCascadeMetaData,
  TextFundamentsMetaData,
  blockRouterMetaDataGoogleFonts,
  blockRouterMetaDataCssAnimations,
  RouterMetaDataColors,
  RouterMetaDataImageFiles,
  RouterMetaDataCssFilter,
  RouterMetaDataMediaFiles,
  RouterMetaDataBoxModel,
  RouterMetaDataHTMLTables,
  RouterMetaDataArrayRenderToTable,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
