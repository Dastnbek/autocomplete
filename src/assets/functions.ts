export const getFilteredData = (fruits: string[], inputValue:string) => {
    const filteredData = fruits.filter(
      fruits =>
        fruits.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

    return filteredData
  }