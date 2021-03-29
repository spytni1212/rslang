const ProgressBar = ({ completed }) => {
  const containerStyles = {
    height: 20,
    width: '50%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 15,
    border: '1px solid black'
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed*100/20}%`,
    background: `rgb(5,255,0)`,
    background: `linear-gradient(0deg, rgba(84,255,152,1) 0%, rgba(35,191,41,1) 40%, rgba(38,195,47,1) 54%, rgba(84,255,152,1) 100%)`,
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
      </div>
    </div>
  );
};

export default ProgressBar;
