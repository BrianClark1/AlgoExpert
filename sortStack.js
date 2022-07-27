function sortStack(stack) {
  if (stack.length === 0) {
    return stack;
  }

  const top = stack.pop();

  sortStack(stack);

  insertInSortedorder(stack, top);

  return stack;
}

function insertInSortedorder(stack, value) {
  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }

  const top = stack.pop();

  insertInSortedorder(stack, value);

  stack.push(top);
}
