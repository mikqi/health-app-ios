import Panel from './Panel'
import { fireIcon, chevronRight } from './Icons'

const CardFavorite = () => (
  <Panel className="py-2 px-4">
    <div className="flex justify-between items-center">
      <div className="flex flex-row items-center">
        <span className="mr-1">
          {fireIcon}
        </span>
        <span className="font-bold text-orange-600">
          Steps
        </span>
      </div>
      <div className="text-sm text-gray-500 flex items-center">
        <span className="mr-1">
          12.45
        </span>
        <span>
          {chevronRight('gray')}
        </span>
      </div>
    </div>
    <div className="mt-2">
      <span className="font-bold text-2xl">29</span>
      <span className="text-sm font-medium text-gray-500">steps</span>
    </div>
  </Panel>
)

export default CardFavorite
