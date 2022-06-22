import { useState, useCallback, useMemo } from "react";

const useShow = () => {
  const [show, setShow] = useState(false);

  const showModal = useCallback(() => {
    setShow(true);
  }, []);
  const hideModal = useCallback(() => {
    setShow(false);
  }, []);

  const values = useMemo(
    () => ({
      showModal,
      hideModal,
      show,
    }),
    [showModal, hideModal, show]
  );

  return values;
};

export default useShow;
