import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  margin: 0 auto;
  width: 80rem;
  height: 47.5rem;
  padding: 2.4rem;
  border-radius: 2rem;
  margin-top: 1.5rem
 
`;

export const Content = styled.div`
  
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    align-items: center;
    
    

    img {

        width: 35rem;
        height: 35rem;
        padding: 1rem 1rem;
        padding-right: 3rem;
        
        filter: drop-shadow(-38px 41px 72px rgba(0, 0, 0, 0.33));

    }
    
`;

export const ContentText = styled.div`
    
    width: 35rem;
    height: 40rem;
    padding: 3rem;
    padding-top: 6rem;
    

    border: 1px solid #B9B9B9;

    
    border-radius: 2rem;

    h1 {
        
        font-size: 4rem;
        line-height: 61px;
        text-align: right;

        color: #000000;
    }

    p {
        font-size: 1.2rem;
        line-height: 25px;
        text-align: right;      

        margin-top: 2rem;
        margin-bottom: 3rem;
    }

`;

export const ButtonPrice = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    button {
        width: 16rem;
        height: 5rem;

        background: linear-gradient(180deg, #231C60 -31.25%, #64499E 144.37%);
        border-radius: 40px;

        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        color: #fff;

    }

    strong {
        font-size:4rem;
        text-align: right;
    }
`;

