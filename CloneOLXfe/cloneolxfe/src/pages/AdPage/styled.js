import styled from 'styled-components'

export const Fake = styled.div `
    background-color: #DDD;
    height: ${props => props.height || 20}px;
`;

export const PageArea = styled.div`
    display: flex;
    margin.top: 20px;
    
    .box{
        background-color:#fff;
        border-radius: 5px;
        box-shadow: 0px 0px 4px #999;
        margin-bottom: 20px;

    }
    .box--padding{
        padding: 10px;
        
    }
    .LeftSide{ 
        flex: 1;
        margin-right: 20px;

        .box{
            display: flex;
        }

        .idImage{
            width: 320px;
            height: 320px;
            margin-right: 20px;

        }

        .adInfo{
            padding: 10px;
            flex: 1;
            .adName{
                margin-bottom: 10px;

            }

            .adDiscription{

            }
        }

    }


`  
