import Recipient from "../models/Recipient.js";

/**
 * GET /api/recipients
 * 전체 수신자 목록 조회
 */
export async function listRecipients(req, res, next) {
  try {
    // 쿼리 파라미터 처리 (기본값 설정)
    const limit = parseInt(req.query.limit, 10) || 8;
    const skip = parseInt(req.query.skip, 10) || 0;

    // 전체 데이터 개수 조회
    const count = await Recipient.countDocuments();

    // 데이터 조회 (최신순)
    const recipients = await Recipient.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();

    // next URL 생성
    const baseUrl = `${req.protocol}://${req.get("host")}${req.baseUrl}`;
    const makeUrl = (newSkip) => `${baseUrl}?limit=${limit}&skip=${newSkip}`;

    const next = skip + limit < count ? makeUrl(skip + limit) : null;
    const previous = skip > 0 ? makeUrl(Math.max(skip - limit, 0)) : null;

    // 응답
    res.status(200).json({
      count,
      next,
      previous,
      results: recipients,
    });
  } catch (error) {
    console.error(error);
    next(error); // 중앙집중식 에러 처리 미들웨어로 넘김
  }
}

/**
 * POST /api/recipients
 * 새 수신자 생성
 */
export async function createRecipient(req, res) {
  try {
    const { name, backgroundColor, backgroundImageURL } = req.body;

    // 필수 필드 체크
    if (!name || !backgroundColor) {
      return res.status(400).json({
        message: "이름과 배경색은 필수입니다.",
      });
    }

    // Recipient 객체 생성
    const newRecipient = new Recipient({
      name,
      backgroundColor,
      backgroundImageURL: backgroundImageURL || null,
    });

    // DB 저장
    const savedRecipient = await newRecipient.save();

    // 성공 응답 (상태 코드 201 Created)
    return res.status(201).json(savedRecipient);
  } catch (error) {
    console.error(error);
    // next(error);
  }
}

/**
 * GET /api/recipients/:id
 * ID로 수신자 조회
 */
export async function getRecipientById(req, res) {
  try {
    const { id } = req.params;

    // ID로 Recipient 조회
    const recipient = await Recipient.findById(id).exec();

    // 데이터가 존재하지 않는 경우
    if (!recipient) {
      return res.status(404).json({ message: "수신자를 찾을 수 없습니다." });
    }

    // 성공 응답
    return res.status(200).json(recipient);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

/**
 * DELETE /api/recipients/:id
 * ID로 수신자 삭제
 */
export async function deleteRecipientById(req, res) {
 try {
    const { id } = req.params;

    // ID로 Recipient 삭제
    const deletedRecipient = await Recipient.findByIdAndDelete(id).exec();

    // 해당 ID의 데이터가 없을 때
    if (!deletedRecipient) {
      return res.status(404).json({ message: "삭제할 수신자가 존재하지 않습니다." });
    }

    // 삭제 성공 응답 (204 No Content 또는 200 OK)
    return res.status(204).send(); // 주로 204 사용
  } catch (error) {
    console.error(error);
    next(error);
  }
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
