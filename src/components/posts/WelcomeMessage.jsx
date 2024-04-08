function WelcomeMessage({ handleClick }) {
  return (
    <>
      <div className="welcomeMessage">
        <h1>No Posts to show</h1>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Fetch Data
        </button>
      </div>
    </>
  );
}

export default WelcomeMessage;
