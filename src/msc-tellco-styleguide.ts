import "./set-public-path";
// Anything exported from this file is importable by other in-browser modules.
// export { StarRating } from './components/star-rating/star-rating.component'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faStar, faCheck, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, faStar, faCheck, faTimes, far, faShoppingCart);
