const APP_DATA = {
  categories: [
    {
      id: "relationships",
      title: "Отношения",
      subtitle: "Хожу по кругу — и снова тот же финал",
      icon: "💞",
      enabled: true,
      badge: "Сейчас"
    },
    {
      id: "self",
      title: "Я и моя жизнь",
      subtitle: "Потеряла направление. Не понимаю, чего хочу",
      icon: "🧭",
      enabled: true,
      badge: "Сейчас"
    },
    {
      id: "career",
      title: "Деньги и карьера",
      subtitle: "Упёрлась в потолок. Знаю как, но не делаю",
      icon: "💸",
      enabled: true,
      badge: "Сейчас"
    },
    {
      id: "soft-entry",
      title: "Мягкий вход",
      subtitle: "Хочу разобраться в себе, но без тяжёлой терапии",
      icon: "🌿",
      enabled: true,
      badge: "Сейчас"
    }
  ],
  flows: {
    relationships: {
      questions: [
        {
          id: "q1",
          progressLabel: "Вопрос 1 из 3",
          title: "Что ты замечаешь за собой в отношениях с партнёром — снова и снова?",
          options: [
            {
              id: "q1_a1",
              label: "Даю больше, чем получаю — злюсь, но продолжаю",
              insightTitle: "Злость — это сигнал, а не слабость",
              insightText:
                "Злость здесь — важный сигнал. Она говорит, что ты видишь дисбаланс. Но продолжать, несмотря на злость — это часто про убеждение: «если я перестану давать, меня не будет за что любить». Дело не в щедрости — дело в том, на чём держится ощущение своей ценности в отношениях."
            },
            {
              id: "q1_a2",
              label: "Становлюсь другой — незаметно подстраиваюсь",
              insightTitle: "Подстройка — стратегия, которая когда-то работала",
              insightText:
                "Подстройка происходит так тихо, что замечаешь её уже потом — когда оглядываешься и не узнаёшь себя. Это не слабость характера. Это стратегия, которая когда-то работала: стать удобной — значит остаться. Только в этой логике своё «я» всегда оказывается лишним."
            },
            {
              id: "q1_a3",
              label: "Влюбляюсь быстро, потом разочаровываюсь",
              insightTitle: "Интенсивность — это ещё не близость",
              insightText:
                "Быстрое «это оно» — почти всегда про интенсивность, а не про человека. Интенсивность ощущается как близость. Только потом оказывается, что человека толком не видела — видела ощущение рядом с ним. Это не слепота. Это сигнал о том, чего очень не хватает внутри."
            },
            {
              id: "q1_a4",
              label: "Держу дистанцию — даже когда хочу ближе",
              insightTitle: "Дистанция при желании близости — это защита",
              insightText:
                "Дистанция при желании близости — один из самых тяжёлых внутренних конфликтов. Он говорит: «хочу, но не верю, что безопасно». Это не холодность и не закрытость характера. Это защита, которая сформировалась задолго до нынешних отношений."
            }
          ]
        },
        {
          id: "q2",
          progressLabel: "Вопрос 2 из 3",
          title: "Как давно этот сценарий с тобой?",
          options: [
            {
              id: "q2_a1",
              label: "Последние несколько месяцев",
              insightTitle: "Ты заметила в нужное время",
              insightText:
                "Короткий срок — не повод не смотреть. Сценарии закрепляются быстро, потому что повторяют то, что психика уже знает. Несколько месяцев — это как раз то окно, когда видно, что происходит, и ещё не стало «просто жизнью». Это хорошая точка для наблюдения."
            },
            {
              id: "q2_a2",
              label: "Уже пара лет",
              insightTitle: "Привычное можно поймать и рассмотреть",
              insightText:
                "Два года — достаточно, чтобы сценарий стал привычным. Привычное не замечается, оно просто повторяется. Хорошая новость: то, что повторяется — можно поймать и рассмотреть. Пара лет — не приговор, это материал. С ним можно работать."
            },
            {
              id: "q2_a3",
              label: "Сколько себя помню",
              insightTitle: "Глубина — не приговор",
              insightText:
                "Когда что-то было «всегда» — это обычно означает, что корень уходит глубже поведения. Скорее всего, это убеждение о себе, усвоенное ещё до того, как ты начала осознанно выбирать. Глубина — это не страшно. Это просто означает, что работать нужно с другим уровнем, не с поверхностью."
            },
            {
              id: "q2_a4",
              label: "Честно — не считала",
              insightTitle: "Отсутствие счёта — тоже информация",
              insightText:
                "Отсутствие счёта — тоже информация. Мы часто не замечаем хронику событий, потому что каждое воспринимается как «новое» и «случайное». Посмотреть на них вместе — первый шаг к тому, чтобы увидеть не случайность, а систему."
            }
          ]
        },
        {
          id: "q3",
          progressLabel: "Вопрос 3 из 3",
          title: "Что ты уже пробовала, чтобы это изменить?",
          options: [
            {
              id: "q3_a1",
              label: "Читала книги, слушала подкасты — не пробило",
              insightTitle: "Знание и изменение — разные уровни",
              insightText:
                "Голова может понять всё — и ничего при этом не изменится. Знание работает на уровне мышления, а сценарии живут глубже: в том, как тело реагирует, как автоматически принимаются решения. Если слова не меняют поведение — нужен другой формат, не ещё больше слов."
            },
            {
              id: "q3_a2",
              label: "Ходила к психологу — не зашло",
              insightTitle: "«Не зашло» — не значит «не для тебя»",
              insightText:
                "«Не зашло» бывает по разным причинам: не тот специалист, не тот формат, не тот момент. Это не значит, что с тобой что-то не так или что психология вообще не для тебя. Иногда нужно несколько попыток, чтобы найти подход, который попадает в нужное место."
            },
            {
              id: "q3_a3",
              label: "Ничего — не верю, что поможет",
              insightTitle: "Скепсис — это защита, а не слабость",
              insightText:
                "Скептицизм после нескольких болезненных финалов — это защита, а не слабость. Мозг рационализирует: «зачем пробовать, если будет то же самое». Только это та же логика, что и в сценарии — избегать неопределённого, потому что привычная боль хотя бы предсказуема. Попробовать — не значит поверить заранее."
            },
            {
              id: "q3_a4",
              label: "Это первый раз, когда я серьёзно об этом думаю",
              insightTitle: "Первый раз — это точка отсчёта",
              insightText:
                "Первый раз задуматься — это не опоздание. Это точка отсчёта. Многие годами замечают симптомы, не называя их. То, что ты сейчас здесь и задаёшь себе эти вопросы — уже движение."
            }
          ]
        }
      ],
      patterns: [
        {
          id: "relationships-core",
          title: "\u00abЗащитник от повторения\u00bb",
          paragraphs: [
            "Самое важное, что ты сейчас сделала — остановилась и посмотрела. Большинство людей этого не делают. То, что увидела — уже не будет таким невидимым.",
            "Вопрос, который стоит унести с собой: что во мне запускает этот сценарий — раньше, чем я успеваю заметить?"
          ]
        }
      ],
      resultRule: {
        patternId: "relationships-core"
      }
    },
    self: {
      questions: [
        {
          id: "q1",
          progressLabel: "Вопрос 1 из 3",
          title: "Когда пытаешься понять, чего хочешь — что происходит?",
          options: [
            {
              id: "q1_a1",
              label: "Голова пустая — и это пугает",
              insightTitle: "Пустота — не отсутствие желаний",
              insightText:
                "Пустота в ответ на вопрос «чего хочу» — это не отсутствие желаний. Это сигнал, что контакт с собой где-то прервался. Обычно это происходит постепенно — когда долго живёшь в режиме «надо» и «должна». Желания никуда не делись. Они просто давно не получали разрешения."
            },
            {
              id: "q1_a2",
              label: "Появляются чужие ответы — то, что надо хотеть",
              insightTitle: "Чужие ответы вместо своих",
              insightText:
                "Когда вместо своего ответа всплывает чужой — это не слабость. Это результат долгого опыта, где твои желания были менее важны, чем ожидания других. Научиться хотеть своё — это не каприз. Это возвращение к себе, которое требует времени и безопасности."
            },
            {
              id: "q1_a3",
              label: "Что-то мелькает — но быстро гасну",
              insightTitle: "То, что мелькает — это и есть ты",
              insightText:
                "Желание мелькнуло — и тут же пришло «это несерьёзно», «не время», «другие важнее». Это не твой голос. Это голос, который ты усвоила давно — и который научился опережать твои собственные импульсы. То, что мелькает — стоит замечать. Именно там и есть ты."
            },
            {
              id: "q1_a4",
              label: "Раздражение — устала от этого вопроса",
              insightTitle: "Раздражение — признак живого вопроса",
              insightText:
                "За раздражением почти всегда стоит усталость от ожидания. Ты давно хочешь знать ответ — и злишься, что его нет. Это не тупик. Это сигнал, что вопрос для тебя живой и важный. А значит — ответ тоже есть. Просто пока спрятан."
            }
          ]
        },
        {
          id: "q2",
          progressLabel: "Вопрос 2 из 3",
          title: "Что чаще всего мешает услышать себя?",
          options: [
            {
              id: "q2_a1",
              label: "Слишком много всего вокруг — не до себя",
              insightTitle: "Занятость — способ не останавливаться",
              insightText:
                "Интересная вещь про занятость: она не просто забирает время. Она даёт ощущение, что ты в порядке — пока двигаешься, пока нужна, пока справляешься. Остановиться страшнее, чем кажется. Потому что в тишине появляется то, что давно ждёт разговора."
            },
            {
              id: "q2_a2",
              label: "Слышу — но не знаю, можно ли этому доверять",
              insightTitle: "Недоверие к себе — это чужой голос",
              insightText:
                "Недоверие к себе — это не про тебя сейчас. Это про кого-то из прошлого, чья оценка однажды оказалась важнее твоей собственной. Ты просто продолжаешь её воспроизводить — уже без него. И это означает, что голос, который не доверяет — не твой. А чужое всегда можно вернуть."
            },
            {
              id: "q2_a3",
              label: "Боюсь, что если прислушаюсь — придётся что-то менять",
              insightTitle: "Не слышать себя — тоже цена",
              insightText:
                "Очень честно. Прислушаться иногда действительно означает увидеть то, что уже сложно не замечать. Только не слышать себя — тоже цена. Просто она платится тихо, каждый день."
            },
            {
              id: "q2_a4",
              label: "Не понимаю, как вообще это делается",
              insightTitle: "Слушать себя — навык, не талант",
              insightText:
                "Никто не учил — и это нормально. Большинство выросли в среде, где важнее было соответствовать и не создавать проблем. Слушать себя — навык. Не талант и не дар. Просто навык."
            }
          ]
        },
        {
          id: "q3",
          progressLabel: "Вопрос 3 из 3",
          title: "Как ты объясняешь себе, почему так получилось?",
          options: [
            {
              id: "q3_a1",
              label: "Слишком долго жила для других — потеряла себя",
              insightTitle: "Не потеря, а привычка себя не замечать",
              insightText:
                "Когда долго живёшь в режиме «сначала все остальные» — желания не исчезают. Они просто перестают казаться важными. Сначала откладываешь. Потом забываешь спросить. Потом уже не знаешь, что спрашивать. Это не потеря себя — это очень долгая привычка себя не замечать."
            },
            {
              id: "q3_a2",
              label: "Никогда особо и не знала — просто сейчас заметнее",
              insightTitle: "Это история, а не характер",
              insightText:
                "Это важное наблюдение. Если «не знала никогда» — значит вопрос «чего хочу» где-то очень рано перестал быть безопасным. Не задавался, не поощрялся, не получал ответа. И психика просто перестала его поднимать. Это не характер — это история."
            },
            {
              id: "q3_a3",
              label: "Что-то случилось — и после этого всё изменилось",
              insightTitle: "Стала другой — ей нужно время",
              insightText:
                "Бывает, что одно событие меняет всё — и то, что раньше казалось понятным, вдруг перестаёт работать. Не потому что ты сломалась. А потому что стала другой. А новой себе нужно время, чтобы разобраться, чего она хочет."
            },
            {
              id: "q3_a4",
              label: "Честно — не думала об этом до сегодня",
              insightTitle: "Остановиться и назвать — это начало",
              insightText:
                "Первый раз остановиться и посмотреть — уже немало. Многие годами живут в ощущении «что-то не то» и не дают себе даже назвать это вслух. То, что ты здесь — означает, что что-то внутри уже готово к разговору."
            }
          ]
        }
      ],
      patterns: [
        {
          id: "self-core",
          title: "«Потерянный контакт»",
          paragraphs: [
            "Не знать, чего хочется — это не финал. Это место, где обычно начинается что-то важное. Что-то внутри уже не может делать вид, что всё в порядке.",
            "Вопрос, который стоит унести с собой: что мешает мне услышать себя — и давно ли я перестала пробовать?"
          ]
        }
      ],
      resultRule: {
        patternId: "self-core"
      }
    },
    career: {
      questions: [
        {
          id: "q1",
          progressLabel: "Вопрос 1 из 3",
          title: "Как выглядит твой следующий шаг в карьере или деньгах?",
          options: [
            {
              id: "q1_a1",
              label: "Понятно — но рука не поднимается сделать",
              insightTitle: "Тело умнее логики",
              insightText:
                "Тело умнее, чем кажется. Когда оно не двигается — это не сбой. Это сигнал: где-то впереди что-то опасное. Не для логики — для какой-то старой части внутри. Она не знает, что ты уже выросла. Она всё ещё охраняет тебя от того, что давно прошло."
            },
            {
              id: "q1_a2",
              label: "Размыто — не могу сформулировать",
              insightTitle: "Размытость — защита от разочарования",
              insightText:
                "Размытость следующего шага редко про отсутствие идей. Чаще про страх назвать конкретно — потому что конкретное можно не сделать, не достигнуть, провалить. Пока размыто — можно не рисковать. Это не прокрастинация. Это защита от разочарования в себе."
            },
            {
              id: "q1_a3",
              label: "Пугает — хотя умом понимаю, что всё нормально",
              insightTitle: "Голова и тело живут в разных реальностях",
              insightText:
                "Когда голова говорит «нормально», а тело не двигается — они живут в разных реальностях. Голова оперирует логикой. А внутри работает что-то старше логики — убеждение, которое сформировалось задолго до любого карьерного плана. Именно оно пугает. Не следующий шаг."
            },
            {
              id: "q1_a4",
              label: "Есть план — но я в нём застряла",
              insightTitle: "Застрять в плане — значит, он не весь твой",
              insightText:
                "Застрять в собственном плане — особенно обидно. Всё продумано, всё понятно — и всё равно не идётся. Это почти всегда означает, что план составлен головой, а что-то внутри с ним не согласилось. Не саботаж — просто две части хотят разного."
            }
          ]
        },
        {
          id: "q2",
          progressLabel: "Вопрос 2 из 3",
          title: "Как давно ты в этой точке?",
          options: [
            {
              id: "q2_a1",
              label: "Последний год — раньше двигалась",
              insightTitle: "Остановка на краю знакомого",
              insightText:
                "Когда движение останавливается после периода роста — это не откат. Это часто означает, что достигла края знакомого. Дальше — неизвестное. А неизвестное психика воспринимает как угрозу, даже если снаружи всё выглядит как обычный следующий шаг."
            },
            {
              id: "q2_a2",
              label: "Уже несколько лет — привыкла называть это стабильностью",
              insightTitle: "Стабильность и застревание выглядят одинаково",
              insightText:
                "Стабильность и застревание иногда выглядят одинаково снаружи. Разница — внутри. Стабильность даёт покой. Застревание даёт тихое раздражение на себя, которое никуда не уходит. Если второе знакомо — это не стабильность. Это остановка, которую удобно так называть."
            },
            {
              id: "q2_a3",
              label: "Сколько себя помню — всегда чуть ниже, чем могла бы",
              insightTitle: "Потолок появился раньше карьеры",
              insightText:
                "Если потолок существует столько, сколько себя помнишь — он появился не из карьерных неудач. Он появился раньше. Из чего-то, что когда-то сказало: вот твоё место. И с тех пор ты очень точно его держишь."
            },
            {
              id: "q2_a4",
              label: "Честно — не замечала, пока не остановилась",
              insightTitle: "Остановиться и заметить — уже другая точка",
              insightText:
                "Остановиться и заметить — уже немало. Пока двигаешься на автопилоте — многое остаётся невидимым. Именно в паузе становится слышно то, что давно работает фоном. И это уже другая точка, чем вчера."
            }
          ]
        },
        {
          id: "q3",
          progressLabel: "Вопрос 3 из 3",
          title: "Как ты объясняешь себе, почему потолок не пробивается?",
          options: [
            {
              id: "q3_a1",
              label: "Недостаточно стараюсь — надо просто взять себя в руки",
              insightTitle: "Самообвинение — удобное, но неточное объяснение",
              insightText:
                "Самообвинение через «надо стараться больше» — удобное объяснение. Оно знакомое, привычное и не требует смотреть глубже. Только если бы дело было в усилиях — ты бы уже давно пробила этот потолок. Ты явно не из тех, кто не старается."
            },
            {
              id: "q3_a2",
              label: "Что-то внутри мешает — только не знаю что",
              insightTitle: "«Что-то» без имени — самое сложное",
              insightText:
                "«Что-то» без имени — самое сложное. Ощущается, но не формулируется. Почти всегда это убеждение, которое настолько давно стало своим, что перестало быть заметным. Как воздух — не видишь, но дышишь им постоянно."
            },
            {
              id: "q3_a3",
              label: "Боюсь, что если вырасту — что-то важное потеряю",
              insightTitle: "Страх роста — реальный тормоз, не выдумка",
              insightText:
                "Это один из самых честных ответов. Рост меняет не только доход — он меняет отношения, ожидания, иногда окружение. Страх потерять что-то при росте — реальный тормоз. Не придуманный. И он заслуживает внимания, а не осуждения."
            },
            {
              id: "q3_a4",
              label: "Честно — не знаю. И это само по себе странно",
              insightTitle: "Механизм работает глубоко — туда анализ не добирается",
              insightText:
                "Не знать, что держит — при том что явно что-то держит — это особое состояние. Умная, рефлексирующая женщина — и нет ответа. Это не слепота. Это признак, что механизм работает очень глубоко. Там, куда обычный самоанализ не добирается."
            }
          ]
        }
      ],
      patterns: [
        {
          id: "career-core",
          title: "«Встроенный потолок»",
          paragraphs: [
            "Потолок, который не пробивается годами — почти никогда не снаружи. Он выставлен изнутри. Точно, незаметно, давно. И именно поэтому его не берут ни курсы, ни марафоны, ни сила воли.",
            "Вопрос, который стоит унести с собой: что именно внутри решает, сколько мне можно?",
          ]
        }
      ],
      resultRule: {
        patternId: "career-core"
      }
    },
    "soft-entry": {
      questions: [
        {
          id: "q1",
          progressLabel: "Вопрос 1 из 3",
          title: "Как ты обычно обращаешься с тем, что тебя беспокоит внутри?",
          options: [
            {
              id: "q1_a1",
              label: "Жду, пока само пройдёт",
              insightTitle: "Ждать — стратегия, но временная",
              insightText:
                "Иногда проходит. Но чаще — уходит вглубь и ждёт там. Не потому что ты избегаешь — просто никто не учил обращаться с этим иначе. Ждать — это не слабость. Это единственный способ, который был доступен. Только он работает до определённого момента."
            },
            {
              id: "q1_a2",
              label: "Ухожу в дела — помогает на время",
              insightTitle: "Занятость делает тише, но не решает",
              insightText:
                "Интересная вещь про занятость: она не решает то, что беспокоит — она просто делает его тише. Пока двигаешься — не слышно. Останавливаешься — и оно снова здесь. Это не плохая стратегия. Просто временная."
            },
            {
              id: "q1_a3",
              label: "Думаю, анализирую — но легче не становится",
              insightTitle: "Понять причины ≠ почувствовать облегчение",
              insightText:
                "Анализ — это попытка решить через голову то, что живёт глубже головы. Понять причину и почувствовать облегчение — разные вещи. Можно очень точно знать, почему тебе тяжело — и всё равно продолжать чувствовать именно это."
            },
            {
              id: "q1_a4",
              label: "Стараюсь не думать об этом вообще",
              insightTitle: "Не думать — энергозатратная стратегия",
              insightText:
                "Не думать — тоже стратегия. Энергозатратная. Держать что-то подальше от сознания требует постоянного усилия — даже если его не замечаешь. Именно поэтому к вечеру так устаёшь, хотя, кажется, ничего особенного не делала."
            }
          ]
        },
        {
          id: "q2",
          progressLabel: "Вопрос 2 из 3",
          title: "Что пугает больше всего, когда думаешь о том, чтобы разобраться в себе?",
          options: [
            {
              id: "q2_a1",
              label: "Что окажется хуже, чем думала",
              insightTitle: "Названное всегда меньше, чем безымянное",
              insightText:
                "Этот страх — один из самых частых. И один из самых несправедливых. Потому что то, что «окажется» — уже есть. Уже живёт внутри. Увидеть это не значит создать — значит наконец назвать. А названное всегда меньше, чем безымянное."
            },
            {
              id: "q2_a2",
              label: "Что придётся менять то, к чему привыкла",
              insightTitle: "Привычная боль кажется безопаснее изменений",
              insightText:
                "Привычное — даже тяжёлое — ощущается как безопасное. Это не слабость. Это нормальная работа психики: известная боль лучше неизвестных изменений. Только вот изменения редко бывают такими страшными, какими кажутся издалека."
            },
            {
              id: "q2_a3",
              label: "Что это долго, тяжело и больно",
              insightTitle: "Не обязательно больно с самого начала",
              insightText:
                "Иногда так и есть. Но не всегда — и не обязательно с самого начала. Разбираться в себе не означает сразу лезть в самое тяжёлое. Можно начать с того, чтобы просто замечать. Это уже работа. И она не обязана быть болезненной."
            },
            {
              id: "q2_a4",
              label: "Что ничего не изменится — и это все зря",
              insightTitle: "«Не помогло» — не значит «не для тебя»",
              insightText:
                "Страх вложиться — и снова не получить результата. Если уже пробовала что-то и не помогло — этот страх логичен. Только «не помогло» почти всегда означает «не тот формат» или «не тот момент». То, что не сработало тогда — не приговор навсегда."
            }
          ]
        },
        {
          id: "q3",
          progressLabel: "Вопрос 3 из 3",
          title: "Что бы ты хотела почувствовать — если бы всё-таки решилась разобраться в себе?",
          options: [
            {
              id: "q3_a1",
              label: "Что я в порядке — даже если не идеальна",
              insightTitle: "Сначала заслужи — потом отдохни. Эту очерёдность стоит пересмотреть",
              insightText:
                "Когда ценность долго зависела от результата — «быть в порядке просто так» перестаёт ощущаться возможным. Не потому что это недостижимо. А потому что психика давно выучила: сначала заслужи, потом отдохни. Эта очерёдность и есть то, что стоит пересмотреть."
            },
            {
              id: "q3_a2",
              label: "Что знаю, чего хочу — и это моё",
              insightTitle: "Желания не исчезли — исчезло разрешение на них",
              insightText:
                "Интересная вещь: мы не теряем желания — мы теряем разрешение на них. В какой-то момент стало понятно, что хотеть что-то своё — небезопасно или бесполезно. И желания не исчезли. Они просто перестали проситься наружу."
            },
            {
              id: "q3_a3",
              label: "Что могу выдохнуть — и не случится ничего плохого",
              insightTitle: "Тело помнит, когда расслабляться было опасно",
              insightText:
                "Невозможность выдохнуть — это не тревожность как черта характера. Это выученная бдительность. Где-то в опыте расслабиться действительно было опасно. Тело запомнило — и продолжает охранять. Даже когда угрозы давно нет."
            },
            {
              id: "q3_a4",
              label: "Что я наконец понимаю, что со мной происходит",
              insightTitle: "Понимание освобождает энергию",
              insightText:
                "Не понимать, что происходит внутри — энергозатратно. Психика тратит огромный ресурс на то, чтобы держать непонятное под контролем. Понимание не решает всё сразу — но освобождает эту энергию. Становится легче просто потому что названо."
            }
          ]
        }
      ],
      patterns: [
        {
          id: "soft-entry-core",
          title: "«Осторожная готовность»",
          paragraphs: [
            "Хотеть разобраться в себе — и одновременно бояться этого. Это не противоречие. Это очень честная позиция человека, который чувствует: там что-то есть — и пока не знает, безопасно ли смотреть.",
            "Вопрос, который стоит унести с собой: что именно я охраняю — и от чего?",
          ]
        }
      ],
      resultRule: {
        patternId: "soft-entry-core"
      }
    }
  },
  prizes: [
    {
      id: "prize-1",
      diceFace: 1,
      weight: 25,
      telegramUrl: "https://s.salebot.pro//psi-gift-1_1",
      maxUrl: "https://s.salebot.pro//psi-gift-1_20",
      title: "Книга «111 рецептов для счастья» с автографом автора",
      subtitle: "Практики самопомощи для сложных моментов",
      description:
        "Карманный сборник техник самопомощи на разные жизненные ситуации: от стресса и самокритики до поиска опоры после расставания."
    },
    {
      id: "prize-2",
      diceFace: 2,
      weight: 25,
      telegramUrl: "https://s.salebot.pro//psi-gift-2_1",
      maxUrl: "https://s.salebot.pro//psi-gift-2_20",
      title: "Скидка 2000 ₽ на индивидуальную игру «Лила» с клиническим психологом",
      subtitle: "Чтобы глубже разобрать свой запрос",
      description:
        "Мягкое приглашение в формат, где запрос можно рассмотреть через метафору, роли и повторяющиеся внутренние сценарии."
    },
    {
      id: "prize-3",
      diceFace: 3,
      weight: 10,
      telegramUrl: "https://s.salebot.pro//psi-gift-3_1",
      maxUrl: "https://s.salebot.pro//psi-gift-3_20",
      title: "30-минутная онлайн-диагностика с клиническим психологом",
      subtitle: "Чтобы понять, что происходит и куда двигаться",
      description:
        "Короткая личная встреча, чтобы прояснить, что сейчас происходит и с какого шага лучше начать разбор."
    },
    {
      id: "prize-4",
      diceFace: 4,
      weight: 2,
      telegramUrl: "https://s.salebot.pro//psi-gift-4_1",
      maxUrl: "https://s.salebot.pro//psi-gift-4_20",
      title: "Онлайн-упражнение «Я-звезда» с клиническим психологом",
      subtitle: "Для опоры, самоценности и более тёплого взгляда на себя",
      description:
        "Ресурсная практика для контакта с самооценкой и своими сильными сторонами в безопасном формате один на один."
    },
    {
      id: "prize-5",
      diceFace: 5,
      weight: 2,
      telegramUrl: "https://s.salebot.pro//psi-gift-5_1",
      maxUrl: "https://s.salebot.pro//psi-gift-5_20",
      title: "Скидка 5000 ₽ на индивидуальную игру «Лила» с клиническим психологом",
      subtitle: "Для глубокой работы с важным для тебя запросом",
      description:
        "Расширенный бонус для более глубокого входа в работу с отношениями, карьерой или внутренним состоянием."
    },
    {
      id: "prize-6",
      diceFace: 6,
      weight: 2,
      telegramUrl: "https://s.salebot.pro//psi-gift-6_1",
      maxUrl: "https://s.salebot.pro//psi-gift-6_20",
      title: "Онлайн-игра «Тревога» с клиническим психологом",
      subtitle: "Чтобы лучше понять свою тревогу и вернуть внутреннюю опору",
      description:
        "Игровой формат, в котором можно мягко разобрать, что именно сейчас охраняет тревога и где искать опору."
    }
  ],
  links: {
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    telegramUrl: "https://t.me/example_channel"
  }
};

const state = createInitialState();

const appNode = document.getElementById("app");

function createInitialState() {
  return {
    screen: "start",
    selectedCategoryId: null,
    currentQuestionIndex: 0,
    selectedAnswers: [],
    currentInsight: null,
    patternId: null,
    diceRolled: false,
    prizeId: null,
    isTransitioning: false
  };
}

function resetState() {
  Object.assign(state, createInitialState());
}

function track(eventName, payload = {}) {
  console.debug("[track]", eventName, payload);
  if (typeof ym === "function") {
    ym(108656678, "reachGoal", eventName, payload);
  }
}

function render() {
  switch (state.screen) {
    case "start":
      renderStart();
      break;
    case "question":
      renderQuestion();
      break;
    case "insight":
      renderInsight();
      break;
    case "pattern":
      renderPattern();
      break;
    case "prize":
      renderPrize();
      break;
    default:
      resetState();
      renderStart();
  }
}

function renderStart() {
  const cards = APP_DATA.categories
    .map((category) => {
      const buttonAttrs = category.enabled
        ? `type="button" data-action="select-category" data-category-id="${category.id}"`
        : `type="button" disabled aria-disabled="true"`;
      const cardClass = category.enabled
        ? "category-card category-card--enabled"
        : "category-card category-card--disabled";

      return `
        <button class="${cardClass}" ${buttonAttrs}>
          <span class="category-icon" aria-hidden="true">${category.icon}</span>
          <span class="category-copy">
            <span class="category-title">${escapeHtml(category.title)}</span>
            <span class="category-subtitle">${escapeHtml(category.subtitle)}</span>
          </span>
        </button>
      `;
    })
    .join("");

  appNode.innerHTML = `
    <section class="screen">
      <h1>Что тебя держит на месте?</h1>
      <p class="lead">Всего три вопроса, чтобы чуть яснее увидеть, что происходит именно сейчас.</p>
      <p class="categories-label">Выбери, что сейчас откликается?</p>
      <div class="categories">${cards}</div>
      <div class="prize-hint">🎲 После прохождения - подарок от психолога</div>
    </section>
  `;
}

function renderQuestion() {
  const flow = getActiveFlow();
  const question = flow.questions[state.currentQuestionIndex];
  const progressValue = ((state.currentQuestionIndex + 1) / flow.questions.length) * 100;
  const options = question.options
    .map(
      (option) => `
        <button
          type="button"
          class="option-button"
          data-action="select-answer"
          data-option-id="${option.id}"
        >
          ${escapeHtml(option.label)}
        </button>
      `
    )
    .join("");

  appNode.innerHTML = `
    <section class="screen">
      <div class="progress-row">
        <span class="progress-label">${escapeHtml(question.progressLabel)} 🎲</span>
      </div>
      <div class="progress-track" aria-hidden="true">
        <div class="progress-fill" style="width: ${progressValue}%"></div>
      </div>
      <h2>${escapeHtml(question.title)}</h2>
      <div class="option-list">${options}</div>
    </section>
  `;
}

function renderInsight() {
  const insight = state.currentInsight;
  const insightNumber = state.currentQuestionIndex + 1;
  const flow = getActiveFlow();
  const totalQuestions = flow.questions.length;
  const progressValue = (insightNumber / totalQuestions) * 100;

  appNode.innerHTML = `
    <section class="screen">
      <div class="progress-row">
        <span class="progress-label">Вопрос ${insightNumber} из ${totalQuestions} 🎲</span>
      </div>
      <div class="progress-track" aria-hidden="true">
        <div class="progress-fill" style="width: ${progressValue}%"></div>
      </div>
      <div class="insight-card">
        <p>${escapeHtml(insight.insightText)}</p>
      </div>
      <div class="button-row">
        <button type="button" class="primary-button" data-action="continue-after-insight">Продолжить</button>
      </div>
    </section>
  `;
}

function renderPattern() {
  const flow = getActiveFlow();
  const pattern = flow.patterns.find((item) => item.id === state.patternId);

  appNode.innerHTML = `
    <section class="screen">
      <div class="eyebrow">Точка наблюдения</div>
      <div class="pattern-card">
        ${pattern.paragraphs.map((p) =>
          p.startsWith("Вопрос, который стоит")
            ? `<blockquote class="pattern-question">${escapeHtml(p)}</blockquote>`
            : `<p>${escapeHtml(p)}</p>`
        ).join("")}
      </div>
      <div class="dice-card">
        <h2>Ты прошла путь до конца</h2>
        <p>Один из шести подарков ждёт тебя. Брось кубик — и узнай, что выпало.</p>
      </div>
      <div class="button-row">
        <button type="button" class="primary-button" data-action="roll-dice">Бросить кубик 🎲</button>
      </div>
      <p class="footnote">* Один подарок на одного участника.</p>
    </section>
  `;
}

function renderPrize() {
  const prize = APP_DATA.prizes.find((item) => item.id === state.prizeId);

  appNode.innerHTML = `
    <section class="screen">
      <div class="eyebrow">Твой подарок</div>
      <div class="dice-wrap">
        <div class="dice">${renderDiceFaceMarkup(prize.diceFace)}</div>
      </div>
      <p class="prize-lead">Вот что выпало тебе сегодня.</p>
      <div class="prize-card">
        <p class="status-chip">Выпало ${prize.diceFace}</p>
        <h2 class="prize-title">${escapeHtml(prize.title)}</h2>
        <p>${escapeHtml(prize.description)}</p>
      </div>
      <div class="button-row">
        <a class="primary-button" href="${prize.maxUrl}" data-track="cta_max_clicked">Получить подарок в Max</a>
        <a class="primary-button" href="${prize.telegramUrl}" data-track="cta_telegram_clicked">Получить подарок в Telegram</a>
        <p class="footnote">* Проверь, что включен VPN.</p>
      </div>
      <div class="all-prizes-section">
        <p class="all-prizes-label">Все подарки этой игры</p>
        <div class="prizes-list">
          ${APP_DATA.prizes.map(p => `
            <div class="prize-list-item${p.id === prize.id ? " prize-list-item--won" : ""}">
              <span class="prize-face">${p.diceFace}</span>
              <span class="prize-list-copy">
                <span class="prize-list-title">${escapeHtml(p.title)}</span>
                <span class="prize-list-subtitle">${escapeHtml(p.subtitle)}</span>
              </span>
              ${p.id === prize.id ? '<span class="prize-list-badge">Твой 🎲</span>' : ""}
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function handleAppClick(event) {
  const actionable = event.target.closest("[data-action], [data-track]");
  if (!actionable) {
    return;
  }

  const trackEvent = actionable.dataset.track;
  if (trackEvent) {
    track(trackEvent, { screen: state.screen });
  }

  const action = actionable.dataset.action;
  if (!action || state.isTransitioning) {
    return;
  }

  switch (action) {
    case "select-category":
      handleCategorySelection(actionable.dataset.categoryId);
      break;
    case "select-answer":
      handleAnswerSelection(actionable.dataset.optionId);
      break;
    case "continue-after-insight":
      handleInsightContinue();
      break;
    case "roll-dice":
      handleDiceRoll();
      break;
    case "restart":
      track("restart_clicked");
      resetState();
      render();
      break;
    default:
      break;
  }
}

function handleCategorySelection(categoryId) {
  state.selectedCategoryId = categoryId;
  state.screen = "question";
  track(`start_selected_${categoryId}`, { categoryId });
  render();
}

function handleAnswerSelection(optionId) {
  const flow = getActiveFlow();
  const question = flow.questions[state.currentQuestionIndex];
  const selectedOption = question.options.find((option) => option.id === optionId);

  state.selectedAnswers[state.currentQuestionIndex] = {
    questionId: question.id,
    optionId: selectedOption.id
  };
  state.currentInsight = {
    questionId: question.id,
    insightTitle: selectedOption.insightTitle,
    insightText: selectedOption.insightText
  };
  state.screen = "insight";

  track("question_answered", {
    questionId: question.id,
    optionId: selectedOption.id
  });

  render();
}

function handleInsightContinue() {
  track("insight_continued", {
    questionIndex: state.currentQuestionIndex,
    questionId: state.currentInsight?.questionId || null
  });

  const flow = getActiveFlow();

  if (state.currentQuestionIndex < flow.questions.length - 1) {
    state.currentQuestionIndex += 1;
    state.currentInsight = null;
    state.screen = "question";
    render();
    return;
  }

  state.currentInsight = null;
  state.patternId = flow.resultRule.patternId;
  state.screen = "pattern";
  track("pattern_viewed", { patternId: state.patternId });
  render();
}

function handleDiceRoll() {
  if (state.diceRolled) {
    return;
  }

  state.isTransitioning = true;
  state.diceRolled = true;
  track("dice_started");

  const diceFace = getRandomDiceFace();

  appNode.innerHTML = `
    <section class="screen screen--centered">
      <div class="dice-roll-scene">
        <div class="dice dice--rolling dice--hero" id="rolling-dice" aria-live="polite">
          <span class="visually-hidden">Анимация броска кубика</span>
          ${renderDiceFaceMarkup(getRandomDiceFace())}
        </div>
        <p class="dice-roll-hint">Смотрим, что выпало…</p>
      </div>
    </section>
  `;

  const diceEl = document.getElementById("rolling-dice");
  const faceIntervalMs = 120;
  const faceInterval = window.setInterval(() => {
    if (diceEl) {
      diceEl.innerHTML =
        '<span class="visually-hidden">Анимация броска кубика</span>' +
        renderDiceFaceMarkup(getRandomDiceFace());
    }
  }, faceIntervalMs);

  window.setTimeout(() => {
    window.clearInterval(faceInterval);

    if (diceEl) {
      diceEl.innerHTML =
        '<span class="visually-hidden">Анимация броска кубика</span>' +
        renderDiceFaceMarkup(diceFace);
    }

    window.setTimeout(() => {
      const prize = APP_DATA.prizes.find((item) => item.diceFace === diceFace);

      state.prizeId = prize.id;
      state.screen = "prize";
      state.isTransitioning = false;

      track("prize_viewed", { prizeId: prize.id, diceFace });

      render();
    }, 400);
  }, 1600);
}

function getActiveFlow() {
  return APP_DATA.flows[state.selectedCategoryId || "relationships"];
}

function getRandomDiceFace() {
  const total = APP_DATA.prizes.reduce((sum, p) => sum + p.weight, 0);
  let rand = Math.random() * total;
  for (const prize of APP_DATA.prizes) {
    rand -= prize.weight;
    if (rand <= 0) return prize.diceFace;
  }
  return APP_DATA.prizes[APP_DATA.prizes.length - 1].diceFace;
}

function renderDiceFaceMarkup(face) {
  const positionsByFace = {
    1: ["middle-center"],
    2: ["top-left", "bottom-right"],
    3: ["top-left", "middle-center", "bottom-right"],
    4: ["top-left", "top-right", "bottom-left", "bottom-right"],
    5: ["top-left", "top-right", "middle-center", "bottom-left", "bottom-right"],
    6: ["top-left", "top-right", "middle-left", "middle-right", "bottom-left", "bottom-right"]
  };

  const pips = positionsByFace[face]
    .map((position) => `<span class="pip pip--${position}"></span>`)
    .join("");

  return `<div class="dice-face" aria-hidden="true">${pips}</div>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

appNode.addEventListener("click", handleAppClick);

render();
