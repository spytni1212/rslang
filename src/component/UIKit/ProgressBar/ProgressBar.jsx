const ProgressBar = ({ number }) => {

  const containerStyles = {
    height: 20,
    width: '50%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 15,
    border: '1px solid #a9a0a0',
    '&media(max-width:600px)': {
      width: '75%'
    }
  };

  const fillerStyles = {
    height: "100%",
    width: `${number*100/20}%`,
    background: `linear-gradient(0deg, rgb(84 255 152 / 97%) 0%, rgb(72 206 77) 40%, rgb(73 212 81) 54%, rgb(140 239 179) 100%)`,
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
