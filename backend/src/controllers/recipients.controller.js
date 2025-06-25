/**
 * GET /api/recipients
 * 전체 수신자 목록 조회
 */
export function listRecipients(req, res) {
  res.send("Get All Recipients");
}

/**
 * POST /api/recipients
 * 새 수신자 생성
 */
export function createRecipient(req, res) {
  res.send("Post Recipients");
}

/**
 * GET /api/recipients/:id
 * ID로 수신자 조회
 */
export function getRecipientById(req, res) {
  res.send("Get Recipient By Id");
}

/**
 * DELETE /api/recipients/:id
 * ID로 수신자 삭제
 */
export function deleteRecipientById(req, res) {
  res.send("Delete Recipients By Id");
}

/**
 * GET /api/recipients/:recipientId/messages
 * 특정 수신자 메시지 목록 조회
 */
export function listRecipientMessages(req, res) {
  res.send("Get Messages By RecipientId");
}

/**
 * POST /api/recipients/:recipientId/messages
 * 특정 수신자에게 새 메시지 등록
 */
export function createRecipientMessage(req, res) {
  res.send("Post Messages By RecipientId");
}

/**
 * GET /api/recipients/:recipientId/reactions
 * 특정 수신자 반응 목록 조회
 */
export function listRecipientReactions(req, res) {
  res.send("Get Reactions By RecipientId");
}

/**
 * POST /api/recipients/:recipientId/reactions
 * 특정 수신자에게 새 반응 등록
 */
export function createRecipientReaction(req, res) {
  res.send("Post Reactions By RecipientId");
}
