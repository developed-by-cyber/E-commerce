
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@/constant';

type Props = {
    focused: boolean;
    name: React.ComponentProps<typeof AntDesign>["name"];
    size: number;
}

const TabsIcon = ({focused, name, size}: Props) => {
  return (
    <AntDesign size={size} name={name} color={focused ? colors.yellow : colors.dark} style={{marginBottom: -3}}/>
  )
}

export default TabsIcon
