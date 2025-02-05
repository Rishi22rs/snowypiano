import { themes } from '../../../assets/data/themes'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../../../store'
import styled from 'styled-components'
import { overlayClass, SettingsContainerClass } from './styles'
import { ThemeState } from '../../../types'
import { LayoutTeaser } from '../../../components/LayoutTeaser'

export const Settings = (props: any) => {
  const dispatch = useDispatch()
  const { changeTheme } = bindActionCreators(actionCreators, dispatch)
  const theme = useSelector((state: State) => state.root.theme)

  const Overlay = styled.div`
    background-color: #1a1a1ac7;
  `

  const closeOverlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.target !== e.currentTarget ? '' : props.visibility(false)
  }

  return (
    <Overlay className={overlayClass} onClick={(e) => closeOverlay(e)}>
      <div className={SettingsContainerClass} style={{ backgroundColor: theme.secondary }}>
        <p className="text-center mb-2 text-xl" style={{ color: theme.secondaryText }}>
          Settings
        </p>
        <p className="mb-4" style={{ color: theme.secondaryText }}>
          View mode
        </p>
        <div className="overflow-auto h-full flex flex-row justify-between">
          <LayoutTeaser title="Full" />
          <LayoutTeaser hideVisualizer title="No Visualizer" />
          <LayoutTeaser hideStaff title="No Cleff" />
        </div>
      </div>
    </Overlay>
  )
}
