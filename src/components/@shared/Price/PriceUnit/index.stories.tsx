import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PriceUnit, { PriceUnitProps } from '@shared/Price/PriceUnit'
import { UserPreferencesProvider } from '@context/UserPreferences'
import MarketMetadataProvider from '@context/MarketMetadata'

export default {
  title: 'Component/@shared/Price/PriceUnit',
  component: PriceUnit
} as ComponentMeta<typeof PriceUnit>

const Template: ComponentStory<typeof PriceUnit> = (args: PriceUnitProps) => {
  return (
    <MarketMetadataProvider>
      <UserPreferencesProvider>
        <PriceUnit {...args} />
      </UserPreferencesProvider>
    </MarketMetadataProvider>
  )
}

interface Props {
  args: PriceUnitProps
}

export const Default: Props = Template.bind({})
Default.args = {
  price: '11.12333'
}
