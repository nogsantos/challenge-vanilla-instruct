/**
 * Modules import
 */
import { FilterController } from './modules/filter';
import { ListController } from './modules/list';
/**
 * Modules construct
 */
const filter = new FilterController();
const list = new ListController();

/**
 * Bind filter component event
 */
document.querySelector('#filter').addEventListener('keyup', filter.do.bind(filter));
