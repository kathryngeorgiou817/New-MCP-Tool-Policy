var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

export { fails as f };
