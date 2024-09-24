const ProgressBar = () => {
  return (
    <div>
      <p className="text-muted-foreground">
        1470 Total Vulnerabilities
      </p>
      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Critical (9)</span>
          <span className="text-sm text-muted-foreground">High (150)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 flex">
            <div
                className="bg-red-500 rounded-l-full"
                style={{ width: '30%' }}
            ></div>
            <div
                className="bg-yellow-500"
                style={{ width: '20%' }}
            ></div>
            <div
                className="bg-green-500 rounded-r-full"
                style={{ width: '50%' }}
            ></div>
            </div>
      </div>
    </div>
  );
};

export default ProgressBar;
