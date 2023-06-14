import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', 'Source Sans Pro', sans-serif;
		background: url('./images/bg_texture.png');
    }

`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;


    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;


export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#0d1cbe' : '#0467fb')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '15px' : '11px')};
    outline: none;
    border: none;
    cursor: pointer;


    &:hover{
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#0467fb' : '#0d1cbe')};

    }


    @media screen and (max-width: 960px) {
        display: flex;
        width: 100px;
        font-size: 1rem;
        justify-content: center;
    }
` 








// export const ContainerS = styled.div`
// 	width: 100%;
// 	max-width: 1300px;
// 	margin-right: auto;
// 	margin-left: auto;
// 	padding: 0 50px;

// 	@media screen and (max-width: 960px) {
// 		padding: 0 30px;
// 	}
// `;

export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;

export const Heading = styled.h2`
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: ${({ width }) => (width ? width : '100%')};
`;
export const TextDiv = styled.div`
	height: ${({ height }) => (height ? height : '')};
	color: ${({ color }) => (color ? color : '')};
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
`

export const TextWrapper = styled.span`
	color: ${({ color }) => (color ? color : '')};
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
`;
export const Section = styled.section`
	padding: 140px 0;
	background: ${({ inverse }) => (inverse ? 'white' : '#071c2f')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};

	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;

export const Row = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;

export const ButtonS = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: #fff;
	outline: none;
	border: 2px solid #fff;
	cursor: pointer;
	overflow: hidden;
	position: relative;


	&:before {
		background: #fff;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&:hover:before {
		height: 500%;
	}

	&:hover {
		color: black;
		transition: 0.5s all ease-in;
	}
`;




export default GlobalStyle;