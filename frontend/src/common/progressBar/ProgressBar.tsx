export const renderProgressBar = (progress: number) => {
  const width = `${progress}%`;

  return (
    <div
      style={{
        width: '100%',
        height: '10px',
        backgroundColor: '#400080',
      }}
    >
      <div
        style={{
          width,
          height: '10px',
          backgroundColor: '#1fcfc3',
        }}
      ></div>
    </div>
  );
};
