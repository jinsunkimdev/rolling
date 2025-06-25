/**
 * GET /api/messages/:id
 * ID로 메시지 조회
 */
export function getMessageById(req, res) {
  const { id } = req.params;
  res.send(`Get Messages By ${id}`);
}

/**
 * PUT /api/messages/:id
 * ID로 메시지 전체 교체 (replace)
 */
export function replaceMessageById(req, res) {
  const { id } = req.params;
  res.send(`Put Messages By ${id}`);
}

/**
 * PATCH /api/messages/:id
 * ID로 메시지 일부 수정 (update)
 */
export function updateMessageById(req, res) {
  const { id } = req.params;
  res.send(`Patch Messages By ${id}`);
}

/**
 * DELETE /api/messages/:id
 * ID로 메시지 삭제
 */
export function deleteMessageById(req, res) {
  const { id } = req.params;
  res.send(`Delete Messages By ${id}`);
}
