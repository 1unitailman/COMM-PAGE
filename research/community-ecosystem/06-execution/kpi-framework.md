# KPI-фреймворк

## North-star и guardrails

Предлагаемая north-star metric: **число участников за неделю, совершивших повторное взаимное взаимодействие с другим участником вне первого контакта** (`Weekly Meaningful Repeat Connections`, WMRC).

Это не «дружба» и не измерение личных отношений. Это операциональный proxy, который требует явного события: совместный второй voice/event, взаимный ответ в follow-up thread или подтверждённый совместный action.

Guardrails:

- число/доля safety incidents на 100 активных;
- median response time и доля закрытых жалоб;
- host workload и burnout pulse;
- доля UGC/клипов с зафиксированным согласием;
- концентрация активности: зависимость от топ-5 участников;
- доля несовершеннолетних, если допускаются, и соблюдение age policy.

## Воронка

| Этап | Метрика | Метод |
|---|---|---|
| Обнаружение | qualified reach | просмотры релевантной аудитории, не общий reach |
| Намерение | landing/invite click-through | UTM + отдельные Discord invites |
| Join | completed onboarding | Discord + форма |
| Activation | первое содержательное действие ≤24 ч | сообщение, voice или RSVP; отдельно от Discord technical activation |
| Meaningful first interaction | участие ≥15 минут либо завершённая совместная задача | attendance log + короткий pulse |
| Second contact | повтор с тем же/новым человеком ≤7 дней | event/voice logs + self-report |
| Retention | D7 и D28 return | Discord visitor/event data, cohort view |
| Contribution | member-led value | помощь новичку, организация, UGC, moderation |
| Referral quality | activated referred joins / referred joins | персональные ссылки, fraud rules |

## 90-дневные пороги как гипотезы

Цифры ниже — decision rules для эксперимента, не отраслевые нормы.

| Метрика | Stop / переработать | Продолжать тест | Сигнал масштабирования |
|---|---:|---:|---:|
| Show-up зарегистрированных на малую сессию | <35% | 35–60% | >60% |
| Meaningful first interaction среди пришедших | <50% | 50–70% | >70% |
| Second contact ≤7 дней | <20% | 20–40% | >40% |
| D7 return активированных | <25% | 25–45% | >45% |
| Доля активностей, проведённых не основателем к дню 90 | <20% | 20–40% | >40% |
| Закрытие safety incidents по SLA | <80% | 80–95% | >95% |

Порог масштабирования требует минимум трёх последовательных когорт и качественных интервью; один удачный вечер ничего не доказывает.

## Channel scorecard

Для TikTok, Reels, Threads, Telegram placements, partners и referrals считать:

`cost per activated member = денежные затраты / activated joins`

`cost per retained member = (деньги + оценка производственных часов) / D28 retained`

`quality rate = members with second contact / joins from source`

Просмотры, CPM, подписчики и дешёвые joins — диагностические, но не целевые метрики.

## Event scorecard

- registrations, show-up, no-show;
- newcomer share;
- meaningful interaction completion;
- second-contact conversion;
- host preparation/live/follow-up hours;
- safety flags;
- repeat demand (`хочу снова` + фактическая повторная регистрация);
- member-led continuation.

## Friendships: как не симулировать точность

Не спрашивать «нашёл ли ты друга?» после одной сессии как KPI. На 7-й и 28-й день использовать нейтральные вопросы:

1. С кем из участников ты общался повторно?
2. Был ли контакт взаимным и желательным?
3. Планируете ли вы конкретное совместное действие?
4. Чувствуешь ли ты себя здесь более своим, чем неделю назад? (шкала 1–5)
5. Что мешало продолжить контакт?

Self-report дополняет, но не заменяет поведенческие данные. Личные сообщения не читаются.

## Ритм аналитики

- после каждого события: 10-минутный operational review;
- еженедельно: cohort funnel + incidents + workload;
- раз в две недели: 5 интервью (активные, пассивные, ушедшие);
- ежемесячно: закрытие/изменение форматов и каналов;
- день 90: go / pivot / stop по заранее зафиксированным критериям.
