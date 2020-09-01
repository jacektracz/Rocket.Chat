import React, { Fragment } from 'react';
import { Box, Divider } from '@rocket.chat/fuselage';
import flattenChildren from 'react-keyed-flatten-children';

const CounterRow = ({ children, ...props }) => <Box
	pb='x28'
	pi='x20'
	display='flex'
	flexDirection='row'
	justifyContent='space-around'
	alignItems='center'
	flexGrow={1}
	borderStyle='solid'
	borderWidth='x2'
	borderRadius='x2'
	borderColor='neutral-300'
	{...props}
>
	{children && flattenChildren(children).reduce((acc, child, i) => {
		acc = children.length - 1 !== i
			? [...acc, <Fragment key={i}>{child}</Fragment>, <Divider key={(i + 1) * children.length} width='x2' m='none' alignSelf='stretch'/>]
			: [...acc, child];
		return acc;
	}, [])}
</Box>;

export default CounterRow;