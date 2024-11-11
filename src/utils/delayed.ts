const delayed = <Value>(value: Value, delay: number = 333) =>
  new Promise<Value>((resolve) => setTimeout(resolve, delay, value));

export default delayed;
