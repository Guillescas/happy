import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: #f5f8fa;
  color: #4d6f80;
`;

export const Content = styled.div`
  .page-title {
    color: #8fa7b2;
    text-align: center;
    font-size: 18px;
    padding: 40px 0 26px 0;
  }

  section {
    width: 800px;
    margin: 24px auto;
    padding: 64px;
    border-radius: 20px;

    background: #fff;

    color: #4d6f80;

    h1 {
      margin-bottom: 24px;
      padding-bottom: 8px;
      border-bottom: 1px solid #d3e2e5;
    }

    p {
      margin: 40px 0;
      font-size: 18px;
      line-height: 28px;
      text-align: left;

      a {
        color: #5173a0;
      }
    }
  }

  .social-media-links {
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin: 0 auto;
    text-align: center;
  }
`;
