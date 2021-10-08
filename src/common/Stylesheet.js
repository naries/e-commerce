import styled from 'styled-components/native'

export const BaseView = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.secondary || "#fff"};
    padding-top: ${({barHeight}) => barHeight}px;
`;

export const AvoidingBaseView = styled.View`
    flex: 1;
    padding-horizontal: 10px;
`;

export const Loading = styled.View`
    justify-content: center;
    align-content: center;
    flex: 1;
`;

export const ButtonContainer = styled.View`
    height: 50px;
    border-radius: 25px;
    background-color: #00e3cf;
    margin-horizontal: 20px;
    align-items: center;
    justify-content: center
`;

export const ButtonLabel = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: 700;
`;

export const ProductBaseContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
`;

export const Left = styled.View`
    margin-horizontal: 4%;
    margin-right: 3%;
`;

export const Right= styled.View`
    margin-Right: 4%;
    margin-left: 3%;
`;

// category

export const Category = styled.View`
    padding: 10px;
    border-width: 1px;
    border-radius: 8px;
    border-color: ${({ theme }) => theme.invertThinBorders || "#444"};
    margin-right: 10px;
    background-color: #fff;
    ${props => props.selected && `
        background-color: #666;
    `};
`; 
export const TextLabel = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: #444;
    ${props => props.selected && `
        color: white;
    `};
`;

export const CategoryMenuScroll = styled.ScrollView`
    background-color: #e9e9e9;
    border-top-color: #ccc;
    border-top-width: 1px;
    border-bottom-color: #ccc;
    border-bottom-width: 1px;
`

// welcome

export const GreetingsBox = styled.View`
    padding-horizontal: 10px;
    padding-vertical: 10px;
    justify-content: space-between;
    align-content: center;
    flex-direction: row;
`

export const Greetings = styled.Text`
    font-size: 25px;
    font-weight: bold;
    line-height: 40px;
    color: ${({ theme }) => theme.primary || '#333'};
`

export const BadgeView = styled.View`
    justify-content: center;
    position: relative;
    ${({spaceright}) => spaceright && `
        margin-right: 20px
    `}
`

export const Badge = styled.View`
    position: absolute;
    background-color:  ${({ theme }) => theme.primary || '#333'};
    top: -10px;
    left: -5px;
    border-radius: 20px;
    padding-horizontal: 5px;
    padding-vertical: 2px;
    max-width: 200px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.secondary || "#fff"}
`

export const BadgeTextNumber = styled.Text`
    color: ${({ theme }) => theme.badgeColor || 'white'};
    font-size: 10px;
    font-weight: bold;
`


export const BadgeText = styled.Text`
    font-size: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary || '#333'};
`

export const Numbers = styled.Text `
    font-size: 16;
    font-weight: 500;
    color:  ${({ theme }) => theme.secondary || "#fff"};
`

export const NumberView = styled.View`
    padding-horizontal: 10px;
    padding-vertical: 4px;
    border-radius: 10px;
    background-color: #333
`

// Add To Cart button
export const DisabledButtonContainer = styled.View`
    height: 40px;
    border-radius: 8px;
    background-color: #efefef;
    margin-horizontal: 20px;
    align-items: center;
    justify-content: center;
    width: 100px
`

export const DisabledButtonLabel = styled.Text`
    color: #333;
    font-size: 16px;
    font-weight: 700;
`

export const AddButtonContainer = styled.View`
    height: 40px;
    border-radius: 8px;
    background-color: #333;
    margin-horizontal: 20px;
    align-items: center;
    justify-content: center;
    width: 100px;
`;

export const AddButtonLabel = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: 700;
`;

export const Body = styled.View`
    width: 44%;
`

export const ProductBaseView = styled.View`
    border-width: 1px;
    border-color: ${({ theme }) => theme.thinBorders || '#ddd'};
    align-self: flex-start;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 6px;
    position: relative
`

export const HangingCover = styled.View`
    position: absolute;
    background-color: rgba(200, 200, 200, .20);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const AddedToCart = styled.View`
    position: absolute;
    bottom: 5px;
    left: 10px;
`
export const AddedToCartLabel = styled.Text`
    color: #666;
    font-weight: 900
`

export const ProductImage = styled.Image`
    width: ${({ width }) => width*0.40}px; 
    ${({ pick }) => pick === 'width1' ? `
        min-height: 200px;
    `: pick === 'width2' ? `
        min-height: 250px;
    `: `
        min-height: 300px;
    `};
    transform: { scale: 0.85 }; 
    resize-mode: contain 
`

export const TitleText = styled.Text`
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.analogous}
`

export const Details = styled.View`
    padding-bottom: 10px;
    bottom: 0;
    width: ${({ width }) => width*0.40}px;
`

export const PriceText = styled.Text`
    line-height: 32px;
    color: ${({ theme }) => theme.analogous};
    font-weight: 700;
    font-size: 20px
`

// Details
export const DetailsLoading = styled.View`
    justify-content: center;
    align-content: center;
    flex: 1
`

export const DetailsProductBaseContainer = styled.View`
    flex: 1;
    flex-direction: row
`

export const DetailsTopicView = styled.View`
    padding-horizontal: 20px;
    padding-vertical: 10px;
`

export const DetailsTopicText = styled.Text`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    color: ${({ theme }) => theme.primary || '#333'};
`

export const DetailsDescription = styled.View`
    padding-horizontal: 20px;
    padding-vertical: 10px;
`

export const DetailsDescriptionText = styled.Text`
    line-height: 24px;
    font-size: 16px;
    color: ${({ theme }) => theme.analogous};
`

export const Casing = styled.View`
    border-top-end-radius: 20px;
    border-top-start-radius: 20px;
    margin-top: -20px;
    padding-top: 10px;
`

export const DetailsImage = styled.View`
    justify-content: center;
    height: 300px;
    position: relative;
    resize-mode: contain;
`

export const DetailsCategoryLabel = styled.View`
    marginTop: 10px;
    color: ${({ theme }) => theme.analogous};
`

export const DetailsCategoryText= styled.Text`
    color: ${({ theme }) => theme.primary || '#333'};
    font-size: 13px;
`

export const DetailsPrice = styled.Text`
    font-weight: 700;
    color: ${({ theme }) => theme.analogous};
`

export const ColorView = styled.View`
    background-color: ${({ theme }) => theme.secondary || "#fff"}
    border-width: 1px;
    border-color: ${({ theme }) => theme.thinBorders || '#ddd'};
    padding: 16px 10px;
`
export const ColorText = styled.Text`
    color: ${({ theme }) => theme.primary || '#333'};
    font-size: 16px;
`


// cart 

export const CartProduct = styled.View`
    margin: 10px;
    border-width: 1px;
    border-color: ${({ theme }) => theme.productInCartBorder};
    background-color: ${({ theme }) => theme.productInCartBackground};
    border-radius: 10px;
    padding: 10px;
    justify-content: space-between;
    flex-direction: row
`
export const CartTitleView = styled.View`
    width: ${({ width }) => width - 140}px;
`

export const CartTitleText = styled.Text`
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.invertThinBorders || "#444"};
`

export const CartPriceText = styled.Text`
    color: ${({ theme }) => theme.analogous};
    font-weight: 700;
    font-size: 18px;
`
export const CartProductImage = styled.View`
    background-color: white;
    width: 80px;
    height: 80px;
    borderRadius: 5px;
    overflow: hidden
`
export const CartImage = styled.Image`
    width: 80px;
    height: 80px;
    resize-mode: contain
`

export const CartButton = styled.View`
    padding-vertical: 10px;
    border-radius: 10px;
`

export const CartButtonText = styled.Text`
    color: ${({ theme }) => theme.invertThinBorders || "#444"};
`