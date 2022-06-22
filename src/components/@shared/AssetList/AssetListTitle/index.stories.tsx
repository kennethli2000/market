import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AssetListTitle, {
  AssetListTitleProps
} from '@shared/AssetList/AssetListTitle'
import MarketMetadataProvider from '@context/MarketMetadata'

export default {
  title: 'Component/@shared/AssetList/AssetListTitle',
  component: AssetListTitle
} as ComponentMeta<typeof AssetListTitle>

const Template: ComponentStory<typeof AssetListTitle> = (
  args: AssetListTitleProps
) => {
  return (
    <MarketMetadataProvider>
      <AssetListTitle {...args} />
    </MarketMetadataProvider>
  )
}

interface Props {
  args: AssetListTitleProps
}

export const Default: Props = Template.bind({})
Default.args = {
  title: 'Space Situational Awareness: TLE Data + Visualization'
}
