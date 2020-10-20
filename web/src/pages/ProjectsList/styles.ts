import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;

  background: #f5f8fa;
`;

export const Content = styled.div`
  width: 800px;
  margin: 0 auto;

  p {
    color: #8fa7b2;
    text-align: center;
    font-size: 18px;
    padding: 40px 0;
  }

  section {
    background: #fff;
    border-radius: 20px;

    padding: 32px 0;

    a {
      text-decoration: none;

      img {
        object-fit: cover;
      }
    }
  }

  form {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    padding: 32px;

    .input-block {
      flex: 1;
    }

    .input-block label,
    .input-block span {
      display: flex;
      margin-bottom: 8px;

      color: #8fa7b3;
      line-height: 24px;
    }

    .input-block select {
      width: 100%;
      height: 48px;
      padding: 0 16px;

      background: #f5f8fa;
      border: 1px solid #d3e2e5;
      color: #5c8599;

      border-radius: 20px;
      outline: none;

      cursor: pointer;
    }

    button {
      bottom: 0;
      width: 150px;
      height: 48px;
      padding: 0 16px;
      margin-left: 32px;

      background: #f5f8fa;
      border: 1px solid #d3e2e5;
      outline: none;
      color: #5c8599;
      border-radius: 20px;

      cursor: pointer;

      transition: all 0.2s;
    }

    button:hover {
      background: #d3e2e5;
      border: 1px solid #5c8599;
    }
  }

  .no-projects {
    color: #5c8599;
  }
`;
