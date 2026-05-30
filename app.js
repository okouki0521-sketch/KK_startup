// Co-Founder Hub - アプリケーション状態 & ロジック

// ==========================================
// 1. デフォルトデータ (体験向上のための初期データ)
// ==========================================
const DEFAULT_STATE = {
    settings: {
        partnerAName: '煌記',
        partnerBName: '和弥',
        projectName: 'KK_startup',
        syncSecretKey: 'KK_startup',
        migratedToRealNames: true,
        geminiApiKey: '',
        paypayUrlPA: '',
        paypayUrlPB: ''
    },
    agreement: {
        visionAim: '旅行計画に悩みやハードルを抱えている人にプラン作成で寄り添い、光を照らしてあげるイメージ of サービス（ブランド of 礎としての「LumiJourney」） of 実現',
        visionValues: '1. 徹底した顧客目線と迅速なセールス\n2. 事業開発スピード of 最大化\n3. 健全な財務状況 of リアルタイム共有',
        pADomain: '事業開発',
        pATasks: '新規事業開発、プロダクト設計、戦略立案、システム管理。',
        pBDomain: '営業',
        pBTasks: '営業活動、クライアント獲得、マーケティング施策、関係構築。',
        pAShare: 50,
        pBShare: 50,
        profitRule: '事業 of 月間売上が軌道に乗るまでは、内部留保を優先し、必要経費を除く余剰利益はすべて事業投資に回す。',
        financeInitial: '共同経費 of 支払いと売上 of 管理をこのワークスペースで1円単位で一元管理し、収支状況を常にオープンにする。',
        financeLimit: '10,000円。これを超える経費支出は、事前にもう一方 of パートナーに相談し合意を得る。',
        decisionProcess: '事業開発と営業 of 各領域においては、それぞれの意思決定を最大限尊重する。ただし、撤退ライン of 判断や大きな投資は完全合意を条件とする。',
        deadlock: '意見が対立した場合は対話による納得を原則とするが、決着がつかない場合は一度仮説検証データを元に再評価を行う。',
        exitCriteria: '事業開始から1ヶ月（2026年6月）時点で、売上が3万円未満の場合は、速やかに事業 of 精算・解散を協議し撤退する。',
        exitShares: '早期撤退や自己都合による脱退 of 際は、獲得した知見や資産をフェアに分配し、トラブルなき解散を行う。',
        sigDatePA: '2026-05-18T10:00:00.000Z',
        sigDatePB: '2026-05-18T10:05:00.000Z'
    },
    phases: [
        {
            id: 'phase-1',
            title: 'フェーズ1: 5月期 初期セールス＆土台作り',
            period: '2026年5月',
            description: '営業活動 of 開始と、初期売上（5,000円） of 計上。プロダクト開発方針 of 決定。',
            completed: true
        },
        {
            id: 'phase-2',
            title: 'フェーズ2: 6月期 最低目標（3万円） of 突破',
            period: '2026年6月',
            description: '理想売上8万円 of 達成に向けたスケール活動、および撤退ライン（3万円） of 確実なクリア。',
            completed: false
        }
    ],
    goals: [
        {
            id: 'goal-real-1',
            title: '月間最低売上達成 (撤退ライン)',
            assignee: 'both',
            current: 49000,
            target: 30000,
            unit: '円',
            deadline: '2026-06-20'
        },
        {
            id: 'goal-real-2',
            title: '月間売上目標 (理想値)',
            assignee: 'both',
            current: 49000,
            target: 80000,
            unit: '円',
            deadline: '2026-06-20'
        }
    ],
    events: [
        {
            id: 'evt-1',
            title: '週次経営進捗ミーティング',
            date: '2026-05-20',
            time: '14:00',
            type: 'meeting',
            notes: 'アジェンダ：プロトタイプ of UI確認と、LP掲載テキスト of すり合わせ'
        },
        {
            id: 'evt-2',
            title: '公式LPデザイン完了＆提出',
            date: '2026-05-25',
            time: '18:00',
            type: 'deadline',
            notes: '煌記が実装するためのデザインカンプを和弥に共有'
        },
        {
            id: 'evt-3',
            title: 'フェーズ1終了・評価会',
            date: '2026-06-15',
            time: '10:00',
            type: 'milestone',
            notes: 'ユーザーフィードバック of 整理と、次の開発フェーズへの移行判断'
        }
    ],
    expenses: [
        {
            id: 'exp-1779456720235',
            title: 'コワーキング一時利用',
            amount: 3000,
            category: 'infrastructure',
            payer: 'partnerA',
            date: '2026-05-23',
            merchant: 'WeWork 渋谷',
            receipt: 'yes'
        },
        {
            id: 'exp-1779505417088',
            title: '同期テスト',
            amount: 100,
            category: 'infrastructure',
            payer: 'partnerA',
            date: '2026-05-23',
            merchant: 'テスト店舗',
            receipt: 'yes'
        }
    ],
    ideas: [
        {
            id: 'idea-1779505462675',
            title: '語りかける動画スクリプト',
            desc: '[English / Japanese]\n\nHave you ever been on a trip where you ended up fighting with your partner over the details?\n「旅行 of 計画中に、喧嘩になっちゃった経験はありませんか？」\n\nSometimes planning a trip is so stressful that it ruins the excitement before you even leave.\n「旅行 of 計画がストレスになって、行く前からワクワクが台無しになってしまうこともありますよね。」\n\nThat\'s why we created LumiJourney.\n「だから私たちは『LumiJourney』を作りました。」',
            color: 'yellow',
            author: 'partnerB',
            date: '2026-05-23',
            likes: ['partnerA']
        }
    ],
    decisions: [
        {
            id: 'dec-1779505511818',
            title: 'AI旅行プラン作成完成後に今後について話し合う',
            reason: '合意事項：AIによる旅行プラン作成機能のローンチ完了時に、改めてプロジェクトのロードマップと次の展開（LumiJourneyの本格化）について共同創業者間で議論を深める。',
            date: '2026-05-22'
        }
    ],
    incomes: [
        {
            id: 'inc-real-5month',
            title: '5月の事業売上',
            amount: 5000,
            category: 'sales',
            receiver: 'common',
            date: '2026-05-15'
        },
        {
            id: 'inc-1779456722675',
            title: 'LP制作の着手金',
            amount: 40000,
            category: 'sales',
            receiver: 'common',
            date: '2026-05-23',
            client: '旅行代理店 LumiTravel',
            status: 'received'
        },
        {
            id: 'inc-1779505411415',
            title: '羽田空港売り込み(5/21)',
            amount: 4000,
            category: 'sales',
            receiver: 'common',
            date: '2026-05-21'
        }
    ],
    updates: [
        {
            id: 'upd-1779505525459',
            author: 'partnerA',
            date: '2026-05-22',
            done: '電車関連案内動画作成\n他のシリーズを考える\nアフレコ字幕入れる',
            todo: '明日の営業アプローチ準備'
        }
    ],
    customers: [],
    changelogs: [
        {
            id: 'chg_1',
            date: '2026-05-26',
            title: '📊 統計UIの改善 ＆ グローバル国籍対応',
            content: '・顧客＆売上管理の統計指標カードを縦積み表示にし、視認性を大幅に改善。\n・インバウンド国籍オプションにイギリス、フランス、ドイツ、イタリア、オーストラリア等のグローバル国を追加。\n・国旗自動バッジング機能のアップデート。',
            isSystem: true
        },
        {
            id: 'chg_2',
            date: '2026-05-25',
            title: '👥 顧客＆売上管理 (CRM) 機能の新規リリース',
            content: '・サービス利用顧客の詳細（名前、年齢、国籍、プラン、期間等）を管理できる顧客データベースをリリース。\n・プラン選択による料金自動算出機能（9つの価格マトリックス）の実装。\n・マネーマネージャー（財務）との双方向リアルタイム自動連携（売上記帳・連動削除）のサポート。',
            isSystem: true
        },
        {
            id: 'chg_3',
            date: '2026-05-22',
            title: '💻 PC専用プレミアムUIの再最適化',
            content: '・PC画面での作業効率を最大化するため、以前の最高品質プレミアム2ペイン表示に復旧。\n・サイドドロワーおよびスマホ用トグルのクリーンアップ。',
            isSystem: true
        },
        {
            id: 'chg_4',
            date: '2026-05-19',
            title: '🚀 共同創業コラボレーションツールの初回デプロイ',
            content: '・共同創業者の信頼を強固にする「デジタルワークスペース」を開設。\n・創業憲章の明文化、ロードマップ＆目標管理、カレンダー共有、割り勘マネーマネージャー、アイデアボード、意思決定ログ、日報報告ボードなど主要モジュールをすべて統合。',
            isSystem: true
        }
    ],
    sharedMemos: [
        {
            id: 'memo-1',
            title: 'インスタDM対応：ファーストアプローチ文面',
            category: 'customer',
            content: '初めまして！旅行プラン作成サポート『LumiJourney』の[パートナー名]と申します。SNSでの素敵なお写真や旅の投稿を拝見し、ぜひ私たちの新サービスをご体験いただきたくDMいたしました！\n\n私たちは、忙しい日常の中で「旅行の計画がストレスになってしまう」という方のための、完全オーダーメイド旅行プラン作成サービスです。\n現在、5社限定で無料モニターを募集しております。もしご興味がございましたら、ぜひ詳細をLP（ https://lumijourney.example.com ）にてご覧いただき、お返事いただけますと幸いです！よろしくお願いいたします！',
            lastUpdatedBy: 'partnerB',
            date: '2026-05-28'
        },
        {
            id: 'memo-2',
            title: '問い合わせ対応ルール (返信スピードの目安)',
            category: 'rule',
            content: '・インスタDMやWebサイトから問い合わせを受信した場合、気がついた方が「3時間以内」にファーストアクション（受領連絡または日程調整）のメッセージを返信する。\n・対応が遅れる、または返答に迷う場合は、必ずすぐにもう一方のパートナーにDM等で相談し、カバーし合うこと。',
            lastUpdatedBy: 'partnerA',
            date: '2026-05-27'
        },
        {
            id: 'memo-3',
            title: 'SNS投稿用の推奨ハッシュタグ一覧',
            category: 'marketing',
            content: 'インスタグラムやTikTokで動画・写真を投稿する際は、以下のタグセットをキャプションの末尾に必ず追加してください。\n\n#LumiJourney #旅行計画 #旅行プラン #オーダーメイド旅行 #旅行準備 #旅行の悩み解決 #旅行好きと繋がりたい #タビジョ #映え旅',
            lastUpdatedBy: 'partnerB',
            date: '2026-05-26'
        },
        {
            id: 'memo-4',
            title: '共有フォルダと使用ツールのリンク集',
            category: 'other',
            content: '・公式Googleドライブ（領収書・資料保管）: https://drive.google.com/drive/folders/lumi-shared\n・LP公開URL: https://lumijourney.example.com\n・ドメイン・サーバー管理（Vercel）: https://vercel.com/koki/lumi-web-app\n・営業アプローチ先スプレッドシート: https://docs.google.com/spreadsheets/d/lumi-sales',
            fileName: '公式Googleドライブフォルダ',
            fileUrl: 'https://drive.google.com/drive/folders/lumi-shared',
            lastUpdatedBy: 'partnerA',
            date: '2026-05-25'
        },
        {
            id: 'memo-5',
            title: 'LumiJourney サービス利用規約 (PDF資料案)',
            category: 'rule',
            content: 'サービスローンチに向けて作成した、モニターユーザー向けの利用規約および免責事項の日本語PDFドラフトです。規約の主要ポイント：\n1. プラン送付後のキャンセルポリシーについて\n2. 個人情報の管理と取り扱い規程\n3. サービスのフィードバックに関する著作権帰属',
            fileName: 'LumiJourney_利用規約_draft.pdf',
            fileUrl: 'https://drive.google.com/file/d/sample-terms-pdf/view',
            lastUpdatedBy: 'partnerA',
            date: '2026-05-29'
        }
    ],
    tasks: [
        {
            id: 'task-1',
            title: 'モニターユーザー向けのLPワイヤーフレーム作成',
            assignee: 'partnerA',
            status: 'todo',
            priority: 'high',
            deadline: '2026-06-05',
            desc: '旅行プラン作成の魅力を伝えるためのLP初期構成案の作成。和弥さんとのZoom面談結果を反映する。'
        },
        {
            id: 'task-2',
            title: 'SNSアプローチ用のInstagram投稿テンプレート作成',
            assignee: 'partnerB',
            status: 'doing',
            priority: 'medium',
            deadline: '2026-06-03',
            desc: 'Canvaを使用して、LumiJourneyのブランドカラーに沿った投稿枠を作成・調整。'
        },
        {
            id: 'task-3',
            title: '公式Googleドライブフォルダと共有リンク集の作成',
            assignee: 'partnerA',
            status: 'done',
            priority: 'low',
            deadline: '2026-05-25',
            desc: '領収書や利用規約ドラフトなどの資料置き場を設定し、共通認識スペースに共有リンクを貼る。'
        }
    ],
    notifications: [
        {
            id: 'noti-1',
            title: 'システム連携完了',
            desc: 'Co-Founder Hubのクラウド同期機能が正常に設定されました！設定メニューから合言葉を共有して開始しましょう。',
            type: 'success',
            date: '2026-05-29',
            read: false
        }
    ],
    chatMessages: [
        {
            id: 'chat-1',
            sender: 'partnerA',
            text: 'お疲れ様！共通認識スペースに利用規約のPDFドラフト（資料プレビュー対応）を追加しておいたよ。確認よろしく！',
            date: '2026-05-29 15:30'
        },
        {
            id: 'chat-2',
            sender: 'partnerB',
            text: 'ありがとう！めちゃくちゃ助かる。後でZoom面談用のヒアリングチェックシートの項目を顧客管理モーダルに追加しておいてくれる？',
            date: '2026-05-29 15:45'
        }
    ],
    aiChatHistory: [],
    cardChats: []
};

// まっさらな状態から開始するための空のスケルトンデータ
const EMPTY_STATE = {
    settings: {
        partnerAName: 'パートナーA',
        partnerBName: 'パートナーB',
        projectName: '新規プロジェクト',
        syncSecretKey: '',
        geminiApiKey: '',
        paypayUrlPA: '',
        paypayUrlPB: ''
    },
    agreement: {
        visionAim: '',
        visionValues: '',
        pADomain: '',
        pATasks: '',
        pBDomain: '',
        pBTasks: '',
        pAShare: 50,
        pBShare: 50,
        profitRule: '',
        financeInitial: '',
        financeLimit: '',
        decisionProcess: '',
        deadlock: '',
        exitCriteria: '',
        exitShares: '',
        sigDatePA: null,
        sigDatePB: null
    },
    phases: [],
    goals: [],
    events: [],
    expenses: [],
    ideas: [],
    decisions: [],
    incomes: [],
    updates: [],
    customers: [],
    changelogs: [],
    sharedMemos: [],
    tasks: [],
    notifications: [],
    chatMessages: [],
    aiChatHistory: [],
    cardChats: []
};

// ==========================================
// 2. アプリケーションの状態管理 (State Store)
// ==========================================
let state = {};

function initStore() {
    let saved = localStorage.getItem('cofounder_hub_state');
    let backupSaved = localStorage.getItem('cofounder_hub_state_backup');
    
    // 自動修復: 万が一メインデータが消えているか破損しており、バックアップがある場合は完全復元！
    if (!saved && backupSaved) {
        console.warn('Main data missing. Restoring from redundant backup...');
        saved = backupSaved;
        localStorage.setItem('cofounder_hub_state', saved);
    }

    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed && typeof parsed === 'object') {
                // 既存のユーザーデータを100%最優先でそのまま採用！
                state = parsed;
                
                // 新機能や今後のアップデートで増えたキー（DEFAULT_STATEにあるが現在のstateに存在しないもの）のみ安全に追加
                const defaultKeys = Object.keys(DEFAULT_STATE);
                defaultKeys.forEach(k => {
                    if (!(k in state) || (Array.isArray(DEFAULT_STATE[k]) && !Array.isArray(state[k]))) {
                        state[k] = JSON.parse(JSON.stringify(DEFAULT_STATE[k]));
                    }
                });

                // 旧バージョンのsharedMemos（4つだけでPDF機能がないもの）のマイグレーション
                if (state.sharedMemos && state.sharedMemos.length === 4 && !state.sharedMemos.some(m => m.id === 'memo-5')) {
                    console.log('Migrating sharedMemos to support PDF and attachment preset data...');
                    state.sharedMemos = JSON.parse(JSON.stringify(DEFAULT_STATE.sharedMemos));
                }

                // ネストされたオブジェクト（settingsやagreement）の内部キーの不足も安全にマージ
                if (DEFAULT_STATE.settings) {
                    state.settings = { ...DEFAULT_STATE.settings, ...state.settings };
                }
                if (DEFAULT_STATE.agreement) {
                    state.agreement = { ...DEFAULT_STATE.agreement, ...state.agreement };
                }

                // すでにリアルデータに移行済みの場合はマイグレーションフラグを強制保護
                state.settings.migratedToRealNames = true;
            } else {
                state = JSON.parse(JSON.stringify(DEFAULT_STATE));
            }
        } catch (e) {
            console.error('Error loading state, recovering from backup...', e);
            if (backupSaved) {
                try {
                    state = JSON.parse(backupSaved);
                } catch(err) {
                    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
                }
            } else {
                state = JSON.parse(JSON.stringify(DEFAULT_STATE));
            }
        }
    } else {
        // まっさらな最初の初期状態でのみDEFAULT_STATE（KK_startupリアル初期値）をコピー
        state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
    
    // 自動クレンジング: 全データの全配列の各要素に updatedAt がなければ lastUpdated または現在時刻を補完してスマートマージの精度を最大化する
    const arrayKeysToClean = ['sharedMemos', 'ideas', 'goals', 'events', 'expenses', 'incomes', 'decisions', 'updates', 'customers', 'phases', 'changelogs'];
    arrayKeysToClean.forEach(key => {
        if (state[key] && Array.isArray(state[key])) {
            state[key].forEach(item => {
                if (item && typeof item === 'object') {
                    if (!item.updatedAt) {
                        item.updatedAt = item.lastUpdated || (item.date ? new Date(item.date).getTime() : 0) || state.lastUpdated || Date.now();
                    }
                }
            });
        }
    });
    
    // 即時バックアップを保存して同期
    localStorage.setItem('cofounder_hub_state_backup', JSON.stringify(state));
    
    // クラウド同期のインターバルを開始
    startSyncInterval();
    
    // 起動時はローカルデータの保存（上書き）を行わず、即座に画面全体を最新の state に基づいて初期描画する
    updateDashboard();
    
    // アクティブなタブを安全に再描画
    const activeTab = document.querySelector('.nav-item.active');
    if (activeTab) {
        const tabId = activeTab.getAttribute('data-tab');
        switchTabQuietly(tabId);
    }
}

function syncSalesGoals() {
    // 累計売上（categoryが 'sales' のもの）の計算
    let totalSales = 0;
    if (state.incomes) {
        state.incomes.forEach(i => {
            if (i.category === 'sales') {
                totalSales += Number(i.amount) || 0;
            }
        });
    }

    // 目標の中でタイトルに「売上」または「撤退」を含むものの現在値を totalSales に同期する
    if (state.goals) {
        state.goals.forEach(g => {
            if (g.title.includes('売上') || g.title.includes('撤退')) {
                g.current = totalSales;
            }
        });
    }
}

function saveState() {
    syncSalesGoals(); // 保存前に売上目標の現在値と実際の売上合計を自動連動
    saveToHistory(state); // 保存直前に現在の状態をタイムマシーン履歴に自動退避！
    state.lastUpdated = Date.now();
    const serialized = JSON.stringify(state);
    localStorage.setItem('cofounder_hub_state', serialized);
    localStorage.setItem('cofounder_hub_state_backup', serialized); // 二重バックアップでデータを完全死守！
    updateDashboard(); // 状態変化時はダッシュボードを更新
    uploadToCloud();   // 非同期でクラウドへ上書き送信
}

// ==========================================
// 2.5 クラウド同期システム (Cloud Sync Manager)
// ==========================================
let syncIntervalId = null;
let isCurrentlySyncing = false; // 二重実行防止

function getBucketId(secretKey) {
    let hash = 0;
    for (let i = 0; i < secretKey.length; i++) {
        const char = secretKey.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    const cleanKey = secretKey.replace(/[^a-zA-Z0-9]/g, '');
    const uniqueString = cleanKey + Math.abs(hash).toString(36);
    return (uniqueString + 'cofoundersync').substring(0, 16);
}

function startSyncInterval() {
    if (syncIntervalId) clearInterval(syncIntervalId);
    
    const secretKey = state.settings.syncSecretKey;
    if (secretKey && secretKey.trim().length >= 4) {
        console.log('Starting cloud sync interval...');
        // 初回即時
        syncWithCloud();
        // 5秒おきに自動チェック
        syncIntervalId = setInterval(syncWithCloud, 5000);
    }
}

async function syncWithCloud() {
    if (isCurrentlySyncing) return;
    const secretKey = state.settings.syncSecretKey;
    if (!secretKey || secretKey.trim().length < 4) return;

    isCurrentlySyncing = true;
    const keyName = getBucketId(secretKey);
    const sharedBucket = "XCFoA3p5QxYZeeEomCFG68"; // 完全にメール認証＆アクティベート済みの本物バケットID
    const url = `https://kvdb.io/${sharedBucket}/${keyName}?t=${Date.now()}`;

    try {
        // 実在するバケットへのダイレクトフェッチ。CORS対応されており、プロキシ不要で100%安全かつ超高速！
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors'
        });
        
        if (response.ok) {
            const cloudData = await response.json();
            
            // クラウド側の最終更新時間と異なる場合のみ同期・マージを行う
            if (cloudData && cloudData.lastUpdated && cloudData.lastUpdated !== state.lastUpdated) {
                console.log('Detected cloud data change. Merging...');
                
                // 新機能キーの不足や構造不一致を安全に補完
                const defaultKeys = Object.keys(DEFAULT_STATE);
                defaultKeys.forEach(k => {
                    if (!(k in cloudData)) {
                        cloudData[k] = JSON.parse(JSON.stringify(DEFAULT_STATE[k]));
                    }
                });
                
                // スマートマージの実行（ローカルとクラウドの合流）
                const mergedState = smartMergeState(state, cloudData);

                // もしマージした結果、手元のデータやクラウドが変化した場合のみ保存と再反映
                if (JSON.stringify(state) !== JSON.stringify(mergedState)) {
                    // 同期前の手元の有効なデータを直前バックアップとして退避
                    const currentLocal = localStorage.getItem('cofounder_hub_state');
                    if (currentLocal) {
                        localStorage.setItem('cofounder_hub_state_pre_sync_backup', currentLocal);
                    }
                    
                    state = mergedState;
                    localStorage.setItem('cofounder_hub_state', JSON.stringify(state));
                    localStorage.setItem('cofounder_hub_state_backup', JSON.stringify(state));
                    
                    // 現在のタブを静かに再描画して更新を反映
                    const activeTab = document.querySelector('.nav-item.active');
                    if (activeTab) {
                        const tabId = activeTab.getAttribute('data-tab');
                        switchTabQuietly(tabId);
                    }
                    
                    // マージ結果をクラウドにも即座に再アップロードし、両者の状態を100%同一に揃える
                    await uploadToCloud();
                    
                    showToast('パートナーのデータとインテリジェント統合されました', 'info');
                }
            }
        } else if (response.status === 404) {
            // クラウド上にまだキーが存在しない（初めて合言葉を設定した）場合、
            // 自分の現在の手元のデータを自動的にクラウドへ初回アップロードして初期データを作成します。
            console.log('No data found in cloud yet. Uploading initial state...');
            await uploadToCloud();
        }
    } catch (e) {
        console.error('Error fetching state from cloud:', e);
    } finally {
        isCurrentlySyncing = false;
    }
}

// 画面を再読み込みせずに静かに最新データをレンダリングするヘルパー
function switchTabQuietly(tabId) {
    if (tabId === 'dashboard') {
        updateDashboard();
    } else if (tabId === 'agreement') {
        loadAgreementData();
    } else if (tabId === 'roadmap') {
        renderRoadmapAndGoals();
    } else if (tabId === 'calendar') {
        renderCalendar();
    } else if (tabId === 'financials') {
        renderFinancials();
    } else if (tabId === 'ideas') {
        renderIdeas();
    } else if (tabId === 'decisions') {
        renderDecisions();
    } else if (tabId === 'updates') {
        renderUpdates();
    } else if (tabId === 'customers') {
        renderCRM();
    } else if (tabId === 'alignment') {
        renderMemos();
    } else if (tabId === 'tasks') {
        renderTasks();
    }
}

async function uploadToCloud() {
    const secretKey = state.settings.syncSecretKey;
    if (!secretKey || secretKey.trim().length < 4) return;

    const keyName = getBucketId(secretKey);
    const sharedBucket = "XCFoA3p5QxYZeeEomCFG68"; // 完全にメール認証＆アクティベート済みの本物バケットID
    const url = `https://kvdb.io/${sharedBucket}/${keyName}`;

    try {
        const response = await fetch(url, {
            method: 'PUT', // kvdb.io の正式な値の書き込みメソッド
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        });
        
        if (response.ok) {
            console.log('Successfully uploaded latest changes to cloud.');
        } else {
            console.error('Failed to upload latest changes (status):', response.status);
        }
    } catch (e) {
        console.error('Failed to upload latest changes to cloud:', e);
    }
}

// ==========================================
// 2.8 トースト通知機能 (Toast Notification)
// ==========================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.style.cssText = `
        padding: 12px 20px;
        background: rgba(30, 41, 59, 0.95);
        color: #ffffff;
        font-size: 13px;
        font-weight: 600;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        gap: 8px;
        backdrop-filter: blur(8px);
        transform: translateY(-20px);
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        pointer-events: auto;
        border-left: 4px solid #10b981;
    `;
    
    if (type === 'danger') {
        toast.style.borderLeftColor = '#ef4444';
    } else if (type === 'info') {
        toast.style.borderLeftColor = '#3b82f6';
    }

    const iconHtml = type === 'danger' ? '⚠️' : (type === 'info' ? 'ℹ️' : '✅');

    toast.innerHTML = `<span>${iconHtml}</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    }, 50);

    setTimeout(() => {
        toast.style.transform = 'translateY(-20px)';
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// ==========================================
// 3. ルーティング & タブ切り替え
// ==========================================
const TAB_INFO = {
    dashboard: { title: 'ダッシュボード', subtitle: 'プロジェクト of 全体状況を一覧します' },
    agreement: { title: '共同経営 創業憲章', subtitle: 'お互い of 信頼と役割分担を明文化します' },
    roadmap: { title: 'ロードマップ & 目標', subtitle: '事業計画と進捗をトラッキングします' },
    calendar: { title: 'カレンダー共有', subtitle: '会議、締め切り、重要なイベントを管理します' },
    financials: { title: 'マネーマネージャー', subtitle: '共同経費 of 支払い状況と割り勘をクリアに保ちます' },
    ideas: { title: 'アイディアボード', subtitle: 'ブレインストーミングとインスピレーション of 保管庫' },
    decisions: { title: '意思決定ログ', subtitle: '「言った・言わない」を防ぐための決定事項 of 公式アーカイブ' },
    updates: { title: '進捗共有・日報', subtitle: '今日取り組んだことと今後取り組むことをお互いに可視化します' },
    customers: { title: '顧客＆売上管理', subtitle: 'サービス利用顧客 of 属性と売上比率を分析・管理します' },
    alignment: { title: '共通認識スペース', subtitle: '共同業務上 of ルール、テンプレート、共通認識を自由に管理・コピペできます' },
    'ai-chat': { title: 'サムライAI企画パートナー', subtitle: 'Gemini AIとお二人の事業アイデアや顧客アプローチDM、旅行プラン構成を共同で企画します' }
};

function switchTab(tabId) {
    // タブパネルの切り替え
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    const activePane = document.getElementById(`tab-${tabId}`);
    if (activePane) activePane.classList.add('active');

    // ナビボタンの切り替え
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-tab') === tabId) {
            item.classList.add('active');
        }
    });

    // ヘッダー情報更新
    const info = TAB_INFO[tabId] || { title: 'ワークスペース', subtitle: '' };
    document.getElementById('current-tab-title').textContent = info.title;
    document.getElementById('current-tab-subtitle').textContent = info.subtitle;

    // タブ固有のロード処理
    if (tabId === 'dashboard') {
        renderDashboard();
    } else if (tabId === 'agreement') {
        loadAgreementData();
    } else if (tabId === 'roadmap') {
        renderRoadmapAndGoals();
    } else if (tabId === 'calendar') {
        renderCalendar();
    } else if (tabId === 'financials') {
        renderFinancials();
    } else if (tabId === 'ideas') {
        renderIdeas();
    } else if (tabId === 'decisions') {
        renderDecisions();
    } else if (tabId === 'updates') {
        renderUpdates();
    } else if (tabId === 'customers') {
        renderCRM();
    } else if (tabId === 'alignment') {
        renderMemos();
    } else if (tabId === 'tasks') {
        renderTasks();
    } else if (tabId === 'ai-chat') {
        renderAIChat();
    }

    // スクロールをトップに戻す
    document.querySelector('.workspace-viewport').scrollTop = 0;
}

// ==========================================
// 4. ダイアログ・モーダル制御
// ==========================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

function initModals() {
    // 閉じるボタンのアタッチ
    document.querySelectorAll('.btn-close-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-overlay');
            if (modal) modal.classList.remove('active');
        });
    });

    // オーバーレイクリックで閉じる
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });
}

// ==========================================
// 5. 設定管理
// ==========================================
function loadSettings() {
    document.getElementById('settings-pA-name').value = state.settings.partnerAName;
    document.getElementById('settings-pB-name').value = state.settings.partnerBName;
    document.getElementById('settings-project-name').value = state.settings.projectName;
    document.getElementById('settings-sync-key').value = state.settings.syncSecretKey || '';
    
    // PayPay & Gemini settings loading
    const gKeyInput = document.getElementById('settings-gemini-key');
    if (gKeyInput) gKeyInput.value = state.settings.geminiApiKey || '';
    
    const pAPaypayInput = document.getElementById('settings-pA-paypay');
    if (pAPaypayInput) pAPaypayInput.value = state.settings.paypayUrlPA || '';
    
    const pBPaypayInput = document.getElementById('settings-pB-paypay');
    if (pBPaypayInput) pBPaypayInput.value = state.settings.paypayUrlPB || '';
}

function saveSettings() {
    const pA = document.getElementById('settings-pA-name').value.trim() || 'パートナーA';
    const pB = document.getElementById('settings-pB-name').value.trim() || 'パートナーB';
    const proj = document.getElementById('settings-project-name').value.trim() || 'Co-Founder Hub';
    const syncKey = document.getElementById('settings-sync-key').value.trim();

    state.settings.partnerAName = pA;
    state.settings.partnerBName = pB;
    state.settings.projectName = proj;
    
    const prevKey = state.settings.syncSecretKey;
    state.settings.syncSecretKey = syncKey;

    // PayPay & Gemini settings saving
    const gKey = document.getElementById('settings-gemini-key')?.value.trim() || '';
    const pAPaypay = document.getElementById('settings-pA-paypay')?.value.trim() || '';
    const pBPaypay = document.getElementById('settings-pB-paypay')?.value.trim() || '';
    
    state.settings.geminiApiKey = gKey;
    state.settings.paypayUrlPA = pAPaypay;
    state.settings.paypayUrlPB = pBPaypay;

    saveState();
    applyDynamicNames();
    
    if (prevKey !== syncKey) {
        startSyncInterval();
    }
    
    closeModal('modal-settings');
    showToast('システム設定を保存しました');
}

function applyDynamicNames() {
    const pA = state.settings.partnerAName;
    const pB = state.settings.partnerBName;
    const project = state.settings.projectName;

    // タイトル更新
    const brandTitle = document.querySelector('.brand-text h1');
    if (brandTitle) brandTitle.textContent = project;

    // アバター
    const avatars = document.querySelectorAll('.partner-avatar');
    if (avatars[0]) {
        avatars[0].textContent = pA.charAt(0).toUpperCase();
        avatars[0].title = pA;
    }
    if (avatars[1]) {
        avatars[1].textContent = pB.charAt(0).toUpperCase();
        avatars[1].title = pB;
    }

    // パートナー名表記
    const namesDisplay = document.getElementById('partner-names-display');
    if (namesDisplay) namesDisplay.textContent = `${pA} & ${pB}`;

    // 創業憲章内の名前ラベル
    const labelA = document.getElementById('label-share-a');
    if (labelA) labelA.textContent = `${pA} の株式保有比率 (%)`;
    const labelB = document.getElementById('label-share-b');
    if (labelB) labelB.textContent = `${pB} の株式保有比率 (%)`;

    const titleA = document.getElementById('partner-a-role-title');
    if (titleA) titleA.textContent = `${pA} の役割`;
    const titleB = document.getElementById('partner-b-role-title');
    if (titleB) titleB.textContent = `${pB} の役割`;

    const sigA = document.getElementById('sig-name-pA');
    if (sigA) sigA.textContent = pA;
    const sigB = document.getElementById('sig-name-pB');
    if (sigB) sigB.textContent = pB;

    // 経費・目標フォームのセレクトボックスの選択肢更新
    const expOptA = document.getElementById('exp-opt-pA');
    if (expOptA) expOptA.textContent = pA;
    const expOptB = document.getElementById('exp-opt-pB');
    if (expOptB) expOptB.textContent = pB;

    const goalOptA = document.getElementById('goal-opt-pA');
    if (goalOptA) goalOptA.textContent = pA;
    const goalOptB = document.getElementById('goal-opt-pB');
    if (goalOptB) goalOptB.textContent = pB;

    const incOptA = document.getElementById('inc-opt-pA');
    if (incOptA) incOptA.textContent = pA;
    const incOptB = document.getElementById('inc-opt-pB');
    if (incOptB) incOptB.textContent = pB;

    const updOptA = document.getElementById('upd-opt-pA');
    if (updOptA) updOptA.textContent = pA;
    const updOptB = document.getElementById('upd-opt-pB');
    if (updOptB) updOptB.textContent = pB;

    // 共有メモフォームの更新者セレクトボックス選択肢更新
    const memoOptA = document.getElementById('memo-opt-pA');
    if (memoOptA) memoOptA.textContent = pA;
    const memoOptB = document.getElementById('memo-opt-pB');
    if (memoOptB) memoOptB.textContent = pB;

    // クイックチャットの送信者セレクトボックス選択肢更新
    const chatOptA = document.getElementById('chat-opt-pA');
    if (chatOptA) chatOptA.textContent = pA;
    const chatOptB = document.getElementById('chat-opt-pB');
    if (chatOptB) chatOptB.textContent = pB;

    // タスクの担当者セレクトボックス選択肢更新
    const taskOptA = document.getElementById('task-opt-pA');
    if (taskOptA) taskOptA.textContent = pA;
    const taskOptB = document.getElementById('task-opt-pB');
    if (taskOptB) taskOptB.textContent = pB;
}

// ==========================================
// 6. ダッシュボードの統計計算 & レンダリング
// ==========================================
function updateDashboard() {
    // 1. 目標進捗平均の算出
    let progressSum = 0;
    const goalCount = state.goals.length;
    if (goalCount > 0) {
        state.goals.forEach(g => {
            const p = Math.min(100, Math.round((g.current / g.target) * 100));
            progressSum += p;
        });
        const avg = Math.round(progressSum / goalCount);
        document.getElementById('dash-goals-progress').textContent = `${avg}%`;
        document.getElementById('dash-goals-bar').style.width = `${avg}%`;
    } else {
        document.getElementById('dash-goals-progress').textContent = '0%';
        document.getElementById('dash-goals-bar').style.width = '0%';
    }

    // 2. 収支の算出
    let totalIncome = 0;
    if (state.incomes) {
        state.incomes.forEach(i => {
            totalIncome += i.amount;
        });
    }

    let totalExpense = 0;
    let pAPaid = 0;
    let pBPaid = 0;
    state.expenses.forEach(e => {
        totalExpense += e.amount;
        if (e.payer === 'partnerA') pAPaid += e.amount;
        else pBPaid += e.amount;
    });

    const netBalance = totalIncome - totalExpense;
    const sign = netBalance > 0 ? '+' : '';
    const dashExpensesTotalEl = document.getElementById('dash-expenses-total');
    if (dashExpensesTotalEl) {
        dashExpensesTotalEl.textContent = `¥${sign}${netBalance.toLocaleString()}`;
        if (netBalance > 0) {
            dashExpensesTotalEl.style.color = '#10b981'; // グリーン
        } else if (netBalance < 0) {
            dashExpensesTotalEl.style.color = '#ef4444'; // レッド
        } else {
            dashExpensesTotalEl.style.color = 'var(--text-main)';
        }
    }

    const dashExpensesSplitEl = document.getElementById('dash-expenses-split');
    if (dashExpensesSplitEl) {
        dashExpensesSplitEl.textContent = `累計収入: ¥${totalIncome.toLocaleString()} / 累計支出: ¥${totalExpense.toLocaleString()}`;
    }

    // 3. その他件数
    document.getElementById('dash-decisions-count').textContent = `${state.decisions.length} 件`;
    document.getElementById('dash-ideas-count').textContent = `${state.ideas.length} 件`;

    // 伝言板（Quick Chat）の自動更新
    renderQuickChat();
    // 通知バッジの自動更新
    updateNotificationBadge();
}

function renderDashboard() {
    updateDashboard();

    // 1. 直近のマイルストーン
    const listContainer = document.getElementById('dash-milestones-list');
    listContainer.innerHTML = '';

    // 直近3件の未完了目標を表示
    const activeGoals = state.goals
        .filter(g => g.current < g.target)
        .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        .slice(0, 3);

    if (activeGoals.length > 0) {
        activeGoals.forEach(g => {
            const item = document.createElement('div');
            item.className = 'timeline-content';
            item.style.marginBottom = '12px';
            item.style.padding = '16px';
            
            const pct = Math.round((g.current / g.target) * 100);
            const assigneeName = g.assignee === 'partnerA' ? state.settings.partnerAName : (g.assignee === 'partnerB' ? state.settings.partnerBName : '共同');
            
            item.innerHTML = `
                <div class="timeline-header" style="margin-bottom: 6px;">
                    <h4 style="font-size: 14px;">${g.title}</h4>
                    <span class="timeline-period" style="font-size: 11px;">期限: ${g.deadline}</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--text-secondary); margin-bottom: 6px;">
                    <span>担当: ${assigneeName}</span>
                    <span>進捗: ${g.current}/${g.target} ${g.unit} (${pct}%)</span>
                </div>
                <div class="progress-bar-container" style="height: 4px; margin-top: 0;">
                    <div class="progress-bar" style="width: ${pct}%; background: linear-gradient(to right, var(--color-green), #34d399)"></div>
                </div>
            `;
            listContainer.appendChild(item);
        });
    } else {
        listContainer.innerHTML = `
            <div class="empty-state">
                <i data-lucide="target"></i>
                <p>現在進行中の目標はありません</p>
            </div>
        `;
        lucide.createIcons();
    }

    // 2. 最近の意思決定
    const decContainer = document.getElementById('dash-decisions-list');
    decContainer.innerHTML = '';

    const recentDecisions = [...state.decisions].reverse().slice(0, 2);

    if (recentDecisions.length > 0) {
        recentDecisions.forEach(d => {
            const card = document.createElement('div');
            card.className = 'decision-card';
            card.style.padding = '20px';
            card.style.marginBottom = '12px';
            card.innerHTML = `
                <div class="decision-meta" style="margin-bottom: 8px;">
                    <span class="decision-date-badge" style="padding: 2px 8px; font-size: 10px;">${d.date}</span>
                </div>
                <h3 style="font-size: 14px; margin-bottom: 8px;">${d.title}</h3>
                <p style="font-size: 12px; color: var(--text-secondary); line-height: 1.5;">${d.reason}</p>
            `;
            decContainer.appendChild(card);
        });
    } else {
        decContainer.innerHTML = `
            <div class="empty-state">
                <i data-lucide="book-open"></i>
                <p>合意された重要決定はありません</p>
            </div>
        `;
        lucide.createIcons();
    }
}

// ==========================================
// 7. 創業憲章 (Co-founder Agreement)
// ==========================================
function loadAgreementData() {
    const ag = state.agreement;

    const visionAimEl = document.getElementById('agree-vision-aim');
    const visionValuesEl = document.getElementById('agree-vision-values');
    const pADomainEl = document.getElementById('agree-pA-domain');
    const pATasksEl = document.getElementById('agree-pA-tasks');
    const pBDomainEl = document.getElementById('agree-pB-domain');
    const pBTasksEl = document.getElementById('agree-pB-tasks');
    const pAShareEl = document.getElementById('agree-pA-share');
    const pBShareEl = document.getElementById('agree-pB-share');
    const profitRuleEl = document.getElementById('agree-profit-rule');
    const financeInitialEl = document.getElementById('agree-finance-initial');
    const financeLimitEl = document.getElementById('agree-finance-limit');
    const decisionProcessEl = document.getElementById('agree-decision-process');
    const deadlockEl = document.getElementById('agree-deadlock');
    const exitCriteriaEl = document.getElementById('agree-exit-criteria');
    const exitSharesEl = document.getElementById('agree-exit-shares');

    // フォーカスガード: ユーザーが現在入力中のインプット・テキストエリアは自動同期で上書きしない！
    if (document.activeElement !== visionAimEl) visionAimEl.value = ag.visionAim;
    if (document.activeElement !== visionValuesEl) visionValuesEl.value = ag.visionValues;
    if (document.activeElement !== pADomainEl) pADomainEl.value = ag.pADomain;
    if (document.activeElement !== pATasksEl) pATasksEl.value = ag.pATasks;
    if (document.activeElement !== pBDomainEl) pBDomainEl.value = ag.pBDomain;
    if (document.activeElement !== pBTasksEl) pBTasksEl.value = ag.pBTasks;
    if (document.activeElement !== pAShareEl) pAShareEl.value = ag.pAShare;
    if (document.activeElement !== pBShareEl) pBShareEl.value = ag.pBShare;
    if (document.activeElement !== profitRuleEl) profitRuleEl.value = ag.profitRule;
    if (document.activeElement !== financeInitialEl) financeInitialEl.value = ag.financeInitial;
    if (document.activeElement !== financeLimitEl) financeLimitEl.value = ag.financeLimit;
    if (document.activeElement !== decisionProcessEl) decisionProcessEl.value = ag.decisionProcess;
    if (document.activeElement !== deadlockEl) deadlockEl.value = ag.deadlock;
    if (document.activeElement !== exitCriteriaEl) exitCriteriaEl.value = ag.exitCriteria;
    if (document.activeElement !== exitSharesEl) exitSharesEl.value = ag.exitShares;

    renderSignatures();
}

function saveAgreementData() {
    const pAShare = parseFloat(document.getElementById('agree-pA-share').value) || 0;
    const pBShare = parseFloat(document.getElementById('agree-pB-share').value) || 0;

    if (pAShare + pBShare !== 100) {
        showToast(`警告: 株式比率の合計が100%になっていません！ (現在は ${pAShare + pBShare}%)`, 'danger');
    }

    state.agreement.visionAim = document.getElementById('agree-vision-aim').value;
    state.agreement.visionValues = document.getElementById('agree-vision-values').value;
    state.agreement.pADomain = document.getElementById('agree-pA-domain').value;
    state.agreement.pATasks = document.getElementById('agree-pA-tasks').value;
    state.agreement.pBDomain = document.getElementById('agree-pB-domain').value;
    state.agreement.pBTasks = document.getElementById('agree-pB-tasks').value;
    state.agreement.pAShare = pAShare;
    state.agreement.pBShare = pBShare;
    state.agreement.profitRule = document.getElementById('agree-profit-rule').value;
    state.agreement.financeInitial = document.getElementById('agree-finance-initial').value;
    state.agreement.financeLimit = document.getElementById('agree-finance-limit').value;
    state.agreement.decisionProcess = document.getElementById('agree-decision-process').value;
    state.agreement.deadlock = document.getElementById('agree-deadlock').value;
    state.agreement.exitCriteria = document.getElementById('agree-exit-criteria').value;
    state.agreement.exitShares = document.getElementById('agree-exit-shares').value;

    saveState();
    showToast('創業憲章を保存し、クラウド同期しました！');
}

function renderSignatures() {
    const ag = state.agreement;
    
    // パートナーA
    const sigA = document.getElementById('sig-pA');
    const dateA = document.getElementById('sig-date-pA');
    const btnA = document.getElementById('btn-sig-pA');
    const statusA = sigA.querySelector('.sig-status');

    if (ag.sigDatePA) {
        statusA.className = 'sig-status signed';
        statusA.textContent = '合意済';
        dateA.textContent = new Date(ag.sigDatePA).toLocaleDateString('ja-JP', { hour: '2-digit', minute: '2-digit' });
        btnA.textContent = '合意を取り消す';
        btnA.className = 'btn btn-outline btn-sm btn-secondary';
    } else {
        statusA.className = 'sig-status unsigned';
        statusA.textContent = '未合意';
        dateA.textContent = '';
        btnA.textContent = '署名・合意する';
        btnA.className = 'btn btn-outline btn-sm';
    }

    // パートナーB
    const sigB = document.getElementById('sig-pB');
    const dateB = document.getElementById('sig-date-pB');
    const btnB = document.getElementById('btn-sig-pB');
    const statusB = sigB.querySelector('.sig-status');

    if (ag.sigDatePB) {
        statusB.className = 'sig-status signed';
        statusB.textContent = '合意済';
        dateB.textContent = new Date(ag.sigDatePB).toLocaleDateString('ja-JP', { hour: '2-digit', minute: '2-digit' });
        btnB.textContent = '合意を取り消す';
        btnB.className = 'btn btn-outline btn-sm btn-secondary';
    } else {
        statusB.className = 'sig-status unsigned';
        statusB.textContent = '未合意';
        dateB.textContent = '';
        btnB.textContent = '署名・合意する';
        btnB.className = 'btn btn-outline btn-sm';
    }
}

function toggleSignature(partner) {
    const key = partner === 'pA' ? 'sigDatePA' : 'sigDatePB';
    if (state.agreement[key]) {
        state.agreement[key] = null;
    } else {
        state.agreement[key] = new Date().toISOString();
        
        // 署名時、意思決定ログに自動で足す
        const partnerName = partner === 'pA' ? state.settings.partnerAName : state.settings.partnerBName;
        const anotherSig = partner === 'pA' ? state.agreement.sigDatePB : state.agreement.sigDatePA;
        
        if (anotherSig) {
            // 2人とも署名完了した瞬間
            addSystemDecision('創業憲章（Co-founder Agreement）の完全調印', '共同創業者2名の完全なデジタル署名による合意成立。株式比率、役割分担、意思決定および撤退プロセスについて正式に効力を発揮します。');
        }
    }
    saveState();
    renderSignatures();
}

function addSystemDecision(title, reason) {
    const newDec = {
        id: 'dec-' + Date.now(),
        title: title,
        reason: reason,
        date: new Date().toISOString().split('T')[0]
    };
    state.decisions.push(newDec);
    saveState();
}

// ==========================================
// 8. ロードマップ & 目標 (Roadmap & Goals)
// ==========================================
function renderRoadmapAndGoals() {
    // 1. ロードマップタイムライン描画
    const timeline = document.getElementById('roadmap-timeline');
    timeline.innerHTML = '';

    if (state.phases.length > 0) {
        state.phases.forEach((p, idx) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-dot ${p.completed ? 'completed' : ''}" onclick="togglePhaseCompleted('${p.id}')" style="cursor: pointer;" title="クリックして完了/未完了を切り替え"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h4>${p.title}</h4>
                        <span class="timeline-period">${p.period}</span>
                    </div>
                    <p>${p.description}</p>
                    <div class="timeline-actions" style="display: flex; gap: 6px; margin-top: 10px;">
                        <button type="button" class="btn-icon-sm edit" onclick="openEditModal('phases', '${p.id}')" title="編集">
                            <i data-lucide="edit-3"></i>
                        </button>
                        <button type="button" class="btn-icon-sm delete" onclick="deletePhase('${p.id}')" title="フェーズを削除">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                </div>
            `;
            timeline.appendChild(item);
        });
    } else {
        timeline.innerHTML = `
            <div class="empty-state">
                <i data-lucide="milestone"></i>
                <p>登録されたフェーズはありません。上のボタンから追加してください。</p>
            </div>
        `;
    }

    // 2. 目標リストの描画
    const goalsContainer = document.getElementById('goals-list-container');
    goalsContainer.innerHTML = '';

    if (state.goals.length > 0) {
        state.goals.forEach(g => {
            const pct = Math.min(100, Math.round((g.current / g.target) * 100));
            const card = document.createElement('div');
            card.className = 'goal-card';
            
            const assigneeClass = g.assignee === 'partnerA' ? 'pA' : (g.assignee === 'partnerB' ? 'pB' : '');
            const assigneeName = g.assignee === 'partnerA' ? state.settings.partnerAName : (g.assignee === 'partnerB' ? state.settings.partnerBName : '共同');

            card.innerHTML = `
                <div class="goal-header">
                    <div class="goal-title-container">
                        <h4>${g.title}</h4>
                        <div class="goal-meta">
                            <span class="goal-assignee-badge ${assigneeClass}">${assigneeName}</span>
                            <span class="goal-deadline-badge">期限: ${g.deadline}</span>
                        </div>
                    </div>
                    <div class="goal-actions" style="display: flex; gap: 6px;">
                        <button type="button" class="btn-icon-sm edit" onclick="openEditModal('goals', '${g.id}')" title="編集">
                            <i data-lucide="edit-3"></i>
                        </button>
                        <button type="button" class="btn-icon-sm delete" onclick="deleteGoal('${g.id}')" title="目標を削除">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                </div>
                <div class="goal-progress-section">
                    <div class="goal-progress-bar-wrapper">
                        <div class="goal-progress-bar" style="width: ${pct}%"></div>
                    </div>
                    <span class="goal-progress-value">${g.current} / ${g.target} ${g.unit} (${pct}%)</span>
                </div>
                <div class="goal-controls">
                    <span>進捗を調整:</span>
                    <button class="btn btn-outline btn-sm" onclick="adjustGoalProgress('${g.id}', -1)" style="padding: 2px 8px;">-</button>
                    <button class="btn btn-outline btn-sm" onclick="adjustGoalProgress('${g.id}', 1)" style="padding: 2px 8px;">+</button>
                    <button class="btn btn-outline btn-sm" onclick="adjustGoalProgress('${g.id}', 10)" style="padding: 2px 8px;">+10</button>
                    <button class="btn btn-primary btn-sm" onclick="setGoalCompleted('${g.id}')" style="padding: 2px 8px;"><i data-lucide="check"></i></button>
                </div>
            `;
            goalsContainer.appendChild(card);
        });
    } else {
        goalsContainer.innerHTML = `
            <div class="empty-state">
                <i data-lucide="target"></i>
                <p>登録された目標はありません。上のボタンから追加してください。</p>
            </div>
        `;
    }
    lucide.createIcons();
}

function togglePhaseCompleted(id) {
    const phase = state.phases.find(p => p.id === id);
    if (phase) {
        phase.completed = !phase.completed;
        saveState();
        renderRoadmapAndGoals();
    }
}

function deletePhase(id) {
    const item = state.phases.find(p => p.id === id);
    const title = item ? item.title : 'フェーズ';
    state.phases = state.phases.filter(p => p.id !== id);
    saveState();
    renderRoadmapAndGoals();
    
    // 変更履歴への自動記帳
    recordChangelogAuto('🗑️ ロードマップフェーズの削除', `開発ロードマップからフェーズ「${title}」を削除しました。`);
    
    showToast(`フェーズ「${title}」を削除しました`, 'danger');
}

function addPhase() {
    const title = document.getElementById('phase-title').value.trim();
    const period = document.getElementById('phase-period').value.trim();
    const desc = document.getElementById('phase-description').value.trim();

    if (!title || !period || !desc) {
        alert('すべてのフィールドを入力してください。');
        return;
    }

    const newPhase = {
        id: 'phase-' + Date.now(),
        title: title,
        period: period,
        description: desc,
        completed: false
    };

    state.phases.push(newPhase);
    saveState();
    renderRoadmapAndGoals();
    
    // 変更履歴への自動記帳
    recordChangelogAuto('🚀 新しいフェーズの追加', `ロードマップにフェーズ「${title}」(${period}) を追加しました。\n注力テーマ: ${desc}`);

    // 入力リセット＆モーダルクローズ
    document.getElementById('phase-title').value = '';
    document.getElementById('phase-period').value = '';
    document.getElementById('phase-description').value = '';
    closeModal('modal-add-phase');
}

function deleteGoal(id) {
    const item = state.goals.find(g => g.id === id);
    const title = item ? item.title : '目標';
    state.goals = state.goals.filter(g => g.id !== id);
    saveState();
    renderRoadmapAndGoals();
    
    // 変更履歴への自動記帳
    recordChangelogAuto('🗑️ 目標の削除', `マイルストーン目標「${title}」を削除しました。`);
    
    showToast(`目標「${title}」を削除しました`, 'danger');
}

function addGoal() {
    const title = document.getElementById('goal-title').value.trim();
    const assignee = document.getElementById('goal-assignee').value;
    const target = parseInt(document.getElementById('goal-target').value) || 1;
    const current = parseInt(document.getElementById('goal-current').value) || 0;
    const unit = document.getElementById('goal-unit').value.trim() || '点';
    const deadline = document.getElementById('goal-deadline').value;

    if (!title || !deadline) {
        alert('必要なフィールドを入力してください。');
        return;
    }

    const newGoal = {
        id: 'goal-' + Date.now(),
        title: title,
        assignee: assignee,
        current: current,
        target: target,
        unit: unit,
        deadline: deadline
    };

    state.goals.push(newGoal);
    saveState();
    renderRoadmapAndGoals();

    // 変更履歴への自動記帳
    const pA = state.settings.partnerAName;
    const pB = state.settings.partnerBName;
    const assigneeLabel = assignee === 'both' ? 'お二人共同' : (assignee === 'partnerA' ? pA : pB);
    recordChangelogAuto('🎯 新しいマイルストーン目標の設定', `目標「${title}」を設定しました。\n担当: ${assigneeLabel}、目標値: ${target}${unit}、期限: ${deadline}`);

    // リセット＆クローズ
    document.getElementById('goal-title').value = '';
    document.getElementById('goal-target').value = 100;
    document.getElementById('goal-current').value = 0;
    closeModal('modal-add-goal');
}

function adjustGoalProgress(id, amt) {
    const goal = state.goals.find(g => g.id === id);
    if (goal) {
        goal.current = Math.max(0, Math.min(goal.target, goal.current + amt));
        saveState();
        renderRoadmapAndGoals();
        
        // 変更履歴への自動記帳
        recordChangelogAuto('📈 目標進捗の更新', `目標「${goal.title}」の進捗を更新しました。\n現在値: ${goal.current}${goal.unit} (目標値: ${goal.target}${goal.unit})`);
    }
}

function setGoalCompleted(id) {
    const goal = state.goals.find(g => g.id === id);
    if (goal) {
        goal.current = goal.target;
        saveState();
        renderRoadmapAndGoals();
        
        // 変更履歴への自動記帳
        recordChangelogAuto('🎉 マイルストーン目標の達成', `目標「${goal.title}」を達成しました！ (実績: ${goal.current}${goal.unit} / 目標: ${goal.target}${goal.unit})`);
    }
}

// ==========================================
// 9. カレンダー共有 (Calendar Shared)
// ==========================================
let currentCalendarDate = new Date();

function renderCalendar() {
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();

    // カレンダーの年月表示
    document.getElementById('calendar-month-year').textContent = `${year}年 ${month + 1}月`;

    const daysGrid = document.getElementById('calendar-days-grid');
    daysGrid.innerHTML = '';

    // 月の最初の日と最後の日
    const firstDayIndex = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const prevLastDay = new Date(year, month, 0).getDate();
    const totalCells = 42; // 6週間分

    let dayCounter = 1;
    let nextMonthDayCounter = 1;

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-day-cell';
        
        let cellDateStr = '';

        if (i < firstDayIndex) {
            // 前月の余り日付
            const d = prevLastDay - firstDayIndex + i + 1;
            cell.classList.add('other-month');
            cell.innerHTML = `<span class="calendar-day-number">${d}</span>`;
            
            const prevMonth = month === 0 ? 11 : month - 1;
            const prevYear = month === 0 ? year - 1 : year;
            cellDateStr = `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        } else if (dayCounter > lastDay) {
            // 翌月の余り日付
            cell.classList.add('other-month');
            cell.innerHTML = `<span class="calendar-day-number">${nextMonthDayCounter}</span>`;
            
            const nextMonth = month === 11 ? 0 : month + 1;
            const nextYear = month === 11 ? year + 1 : year;
            cellDateStr = `${nextYear}-${String(nextMonth + 1).padStart(2, '0')}-${String(nextMonthDayCounter).padStart(2, '0')}`;
            nextMonthDayCounter++;
        } else {
            // 当月の日付
            cell.innerHTML = `<span class="calendar-day-number">${dayCounter}</span>`;
            
            // 本日チェック
            const today = new Date();
            if (dayCounter === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                cell.classList.add('today');
            }
            
            cellDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayCounter).padStart(2, '0')}`;
            dayCounter++;
        }

        // イベントバッジのマッチング (最大2件まで表示し、3件以上は '+他N件' で集約してUIをスッキリ保つ)
        const dayEvents = state.events.filter(e => e.date === cellDateStr);
        if (dayEvents.length > 0) {
            // 時間順に並び替え
            const sortedDayEvents = [...dayEvents].sort((a, b) => (a.time || '').localeCompare(b.time || ''));
            const maxVisibleEvents = 2;
            
            sortedDayEvents.slice(0, maxVisibleEvents).forEach(evt => {
                const badge = document.createElement('span');
                badge.className = `calendar-event-dot ${evt.type}`;
                badge.style.fontSize = '8px'; // マスの中で綺麗に収まる極小サイズ
                badge.style.padding = '1px 4px';
                badge.textContent = `${evt.time || ''} ${evt.title}`;
                badge.title = `${evt.title}\n時間: ${evt.time || '未指定'}\nメモ: ${evt.notes || 'なし'}`;
                cell.appendChild(badge);
            });
            
            if (dayEvents.length > maxVisibleEvents) {
                const moreBadge = document.createElement('span');
                moreBadge.className = 'calendar-event-dot other';
                moreBadge.style.cssText = 'font-size: 8px; padding: 1px 4px; text-align: center; font-weight: 700; background: rgba(0,0,0,0.04); border-left: 3px solid var(--text-muted); color: var(--text-secondary);';
                moreBadge.textContent = `+他 ${dayEvents.length - maxVisibleEvents} 件`;
                cell.appendChild(moreBadge);
            }
        }

        // セルクリックで「日付詳細モーダル（クリックしたら大きくなる）」を開く！
        const finalDate = cellDateStr;
        cell.addEventListener('click', (e) => {
            if (e.target.className.includes('btn-delete-event') || e.target.closest('.btn-delete-event') || e.target.className.includes('btn-edit-event') || e.target.closest('.btn-edit-event')) return;
            openDayDetails(finalDate);
        });

        daysGrid.appendChild(cell);
    }

    // 今後の予定リスト
    renderUpcomingEventsList();
}

function renderUpcomingEventsList() {
    const list = document.getElementById('upcoming-events-list');
    list.innerHTML = '';

    const todayStr = new Date().toISOString().split('T')[0];
    // 本日以降の予定を昇順で表示
    const upcoming = state.events
        .filter(e => e.date >= todayStr)
        .sort((a, b) => new Date(`${a.date}T${a.time || '00:00'}`) - new Date(`${b.date}T${b.time || '00:00'}`));

    if (upcoming.length > 0) {
        upcoming.forEach(e => {
            const item = document.createElement('div');
            item.className = `upcoming-event-item ${e.type}`;
            item.innerHTML = `
                <div class="upcoming-event-time">${e.date} ${e.time || ''}</div>
                <div class="upcoming-event-title">${e.title}</div>
                ${e.notes ? `<div class="upcoming-event-desc">${e.notes}</div>` : ''}
                <div style="position: absolute; right: 12px; top: 12px; display: flex; gap: 6px;">
                    <button type="button" class="btn-delete-event btn-edit-event" onclick="openEditModal('events', '${e.id}')" title="編集" style="position: static; background: none; border: none; cursor: pointer; color: var(--text-muted);">
                        <i data-lucide="edit-3" style="width: 14px; height: 14px;"></i>
                    </button>
                    <button type="button" class="btn-delete-event" onclick="deleteEvent('${e.id}')" title="削除" style="position: static; background: none; border: none; cursor: pointer; color: var(--text-muted);">
                        <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                    </button>
                </div>
            `;
            list.appendChild(item);
        });
    } else {
        list.innerHTML = `<p style="font-size: 13px; color: var(--text-muted); text-align: center;">直近の予定はありません</p>`;
    }
    lucide.createIcons();
}

function prevMonth() {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
    renderCalendar();
}

function addEvent() {
    const title = document.getElementById('evt-title').value.trim();
    const date = document.getElementById('evt-date').value;
    const time = document.getElementById('evt-time').value;
    const type = document.getElementById('evt-type').value;
    const notes = document.getElementById('evt-notes').value.trim();

    if (!title || !date) {
        alert('イベント名と日付を入力してください。');
        return;
    }

    const newEvt = {
        id: 'evt-' + Date.now(),
        title: title,
        date: date,
        time: time,
        type: type,
        notes: notes
    };

    state.events.push(newEvt);
    saveState();
    renderCalendar();

    // 変更履歴への自動記帳
    const typeLabel = newEvt.type === 'meeting' ? '👥 ミーティング' : (newEvt.type === 'deadline' ? '🚨 締切' : (newEvt.type === 'milestone' ? '🎉 節目の目標' : '📅 予定'));
    recordChangelogAuto('📅 新しい予定の追加', `予定「${newEvt.title}」(${typeLabel}) を ${newEvt.date} ${newEvt.time || ''} に追加しました。${newEvt.notes ? '\n詳細・メモ: ' + newEvt.notes : ''}`);

    // リセット
    document.getElementById('evt-title').value = '';
    document.getElementById('evt-notes').value = '';
    closeModal('modal-add-event');
}

function deleteEvent(id) {
    const item = state.events.find(e => e.id === id);
    const title = item ? item.title : '予定';
    state.events = state.events.filter(e => e.id !== id);
    saveState();
    renderCalendar();
    
    // 変更履歴への自動記帳
    recordChangelogAuto('🗑️ 予定の削除', `予定「${title}」をカレンダーから削除しました。`);
    
    showToast(`予定「${title}」を削除しました`, 'danger');
}

// ==========================================
// 10. マネーマネージャー (Financials / Exp)
// ==========================================
function renderFinancials() {
    // パートナー表記
    const pA = state.settings.partnerAName;
    const pB = state.settings.partnerBName;

    // 比率の取得
    const pAShare = state.agreement.pAShare;
    const pBShare = state.agreement.pBShare;

    document.getElementById('fin-pA-share-percent').textContent = `負担比率: ${pAShare}%`;
    document.getElementById('fin-pB-share-percent').textContent = `負担比率: ${pBShare}%`;

    // 支出合計
    let totalExpense = 0;
    let pAPaid = 0;
    let pBPaid = 0;

    state.expenses.forEach(e => {
        totalExpense += e.amount;
        if (e.payer === 'partnerA') pAPaid += e.amount;
        else pBPaid += e.amount;
    });

    document.getElementById('fin-total-expense').textContent = `¥${totalExpense.toLocaleString()}`;
    document.getElementById('fin-pA-total').textContent = `¥${pAPaid.toLocaleString()}`;
    document.getElementById('fin-pB-total').textContent = `¥${pBPaid.toLocaleString()}`;

    // 収入合計 & 事業残高の算出
    let totalIncome = 0;
    if (state.incomes) {
        state.incomes.forEach(i => {
            totalIncome += i.amount;
        });
    }

    const totalIncomeEl = document.getElementById('fin-total-income');
    if (totalIncomeEl) totalIncomeEl.textContent = `¥${totalIncome.toLocaleString()}`;

    const cashBalanceEl = document.getElementById('fin-cash-balance');
    if (cashBalanceEl) {
        const cashBalance = totalIncome - totalExpense;
        cashBalanceEl.textContent = `¥${cashBalance.toLocaleString()}`;
        if (cashBalance < 0) {
            cashBalanceEl.className = 'text-pink';
        } else {
            cashBalanceEl.className = 'text-green';
        }
    }

    // 清算の計算
    const pAShouldPay = totalExpense * (pAShare / 100);
    const pBShouldPay = totalExpense * (pBShare / 100);

    const balanceCard = document.querySelector('.settlement-card');
    const balanceH2 = document.getElementById('fin-settlement-balance');
    const balanceP = document.getElementById('fin-settlement-action');
    const clearBtn = document.getElementById('btn-clear-settlement');

    if (pAPaid > pAShouldPay) {
        const diff = Math.round(pAPaid - pAShouldPay);
        balanceH2.textContent = `¥${diff.toLocaleString()}`;
        balanceH2.className = 'text-blue';
        balanceP.textContent = `${pB} が ${pA} に支払う金額`;
        balanceCard.style.backgroundColor = 'rgba(59, 130, 246, 0.08)';
        balanceCard.style.borderColor = 'rgba(59, 130, 246, 0.3)';
        clearBtn.style.display = 'block';
    } else if (pBPaid > pBShouldPay) {
        const diff = Math.round(pBPaid - pBShouldPay);
        balanceH2.textContent = `¥${diff.toLocaleString()}`;
        balanceH2.className = 'text-purple';
        balanceP.textContent = `${pA} が ${pB} に支払う金額`;
        balanceCard.style.backgroundColor = 'rgba(168, 85, 247, 0.08)';
        balanceCard.style.borderColor = 'rgba(168, 85, 247, 0.3)';
        clearBtn.style.display = 'block';
    } else {
        balanceH2.textContent = '¥0';
        balanceH2.className = '';
        balanceP.textContent = 'お互いの出費バランスは均等です';
        balanceCard.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
        balanceCard.style.borderColor = 'rgba(16, 185, 129, 0.2)';
        clearBtn.style.display = 'none';
    }

    // 清算用PayPay送金QRコード自動生成フック
    updatePayPayQR(pAPaid, pBPaid, pAShouldPay, pBShouldPay, pA, pB);

    // ==========================================
    // 月別・統合財務アコーディオンの動的生成
    // ==========================================
    const monthlyData = {};

    // 経費のグループ化
    state.expenses.forEach(e => {
        const month = e.date ? e.date.substring(0, 7) : '日付不明'; // "YYYY-MM"
        if (!monthlyData[month]) {
            monthlyData[month] = { expenses: [], incomes: [], totalExp: 0, totalInc: 0 };
        }
        monthlyData[month].expenses.push(e);
        monthlyData[month].totalExp += e.amount;
    });

    // 収入のグループ化
    if (state.incomes) {
        state.incomes.forEach(i => {
            const month = i.date ? i.date.substring(0, 7) : '日付不明';
            if (!monthlyData[month]) {
                monthlyData[month] = { expenses: [], incomes: [], totalExp: 0, totalInc: 0 };
            }
            monthlyData[month].incomes.push(i);
            monthlyData[month].totalInc += i.amount;
        });
    }

    const monthKeys = Object.keys(monthlyData).sort().reverse();
    const container = document.getElementById('monthly-ledger-container');
    container.innerHTML = '';

    if (monthKeys.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                財務データ（収入・経費）はありません。上のフォームから入力してください。
            </div>
        `;
    } else {
        monthKeys.forEach((month, index) => {
            const data = monthlyData[month];
            const net = data.totalInc - data.totalExp;
            const netClass = net >= 0 ? 'text-green' : 'text-pink';
            const netSign = net >= 0 ? '+' : '';
            
            const [year, mon] = month.split('-');
            const formattedMonth = year && mon ? `${year}年${mon}月` : month;
            
            // デフォルトで最初の月（最新の月）を開く
            const isDefaultOpen = index === 0;
            const displayStyle = isDefaultOpen ? 'block' : 'none';
            const activeClass = isDefaultOpen ? 'active' : '';
            const arrowIcon = isDefaultOpen ? 'chevron-up' : 'chevron-down';

            const div = document.createElement('div');
            div.className = 'monthly-ledger-card';
            div.style.cssText = `
                border: 1px solid var(--border-color);
                border-radius: var(--radius-lg);
                margin-bottom: 16px;
                background: var(--bg-card);
                overflow: hidden;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                transition: all 0.2s ease;
            `;
            
            div.innerHTML = `
                <!-- アコーディオンヘッダー -->
                <div class="monthly-ledger-header ${activeClass}" data-month="${month}" style="
                    padding: 16px 20px;
                    background: rgba(255, 255, 255, 0.03);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    border-bottom: ${isDefaultOpen ? '1px solid var(--border-color)' : 'none'};
                    user-select: none;
                ">
                    <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                        <h4 style="margin: 0; font-size: 16px; font-weight: 700; color: var(--text-main);">${formattedMonth}</h4>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-left: 8px;">
                            <span class="badge-category income-sales" style="font-size: 11px; padding: 2px 8px;">🟢 収入: ¥${data.totalInc.toLocaleString()}</span>
                            <span class="badge-category infrastructure" style="font-size: 11px; padding: 2px 8px; background: rgba(239, 68, 68, 0.1); color: #ef4444;">🔴 支出: ¥${data.totalExp.toLocaleString()}</span>
                            <span class="${netClass}" style="font-size: 11px; font-weight: 700; padding: 2px 8px; background: rgba(255,255,255,0.05); border-radius: 4px;">
                                ⚖️ 差引収支: ${netSign}¥${net.toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <i class="accordion-arrow" data-lucide="${arrowIcon}" style="width: 18px; height: 18px; color: var(--text-muted); transition: transform 0.2s;"></i>
                    </div>
                </div>
                
                <!-- アコーディオンボディ -->
                <div class="monthly-ledger-body" id="body-${month}" style="display: ${displayStyle}; padding: 20px; border-top: 1px solid var(--border-color);">
                    <div class="monthly-grid-layout" style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                        
                        <!-- 収入セクション -->
                        <div>
                            <h5 style="color: #10b981; margin-top: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 700; border-left: 3px solid #10b981; padding-left: 8px;">
                                <i data-lucide="trending-up" style="width: 16px; height: 16px;"></i> 収入明細
                            </h5>
                            <div class="table-responsive">
                                <table class="finance-table" style="font-size: 12.5px; width: 100%;">
                                    <thead>
                                        <tr>
                                            <th>日付</th>
                                            <th>詳細内容 / 取引先・顧客</th>
                                            <th>カテゴリ</th>
                                            <th>受取/入金先</th>
                                            <th>入金状況</th>
                                            <th>金額</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${data.incomes.length === 0 ? `
                                            <tr>
                                                <td colspan="7" style="text-align: center; padding: 24px; color: var(--text-muted);">この月の収入データはありません</td>
                                            </tr>
                                        ` : [...data.incomes].reverse().map(inc => {
                                            const catLabel = getIncomeCategoryLabel(inc.category);
                                            let receiverLabel = inc.receiver === 'partnerA' ? pA : (inc.receiver === 'partnerB' ? pB : '共同プール');
                                            const recClass = inc.receiver === 'common' ? 'common' : (inc.receiver === 'partnerA' ? 'pA' : 'pB');
                                            const clientVal = inc.client ? `<div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">取引先: ${inc.client}</div>` : '';
                                            const statusText = inc.status === 'pending' ? '未入金 (請求中)' : '入金完了';
                                            const statusClass = inc.status === 'pending' ? 'badge-category office' : 'badge-category income-sales';
                                            
                                            return `
                                                <tr>
                                                    <td>${inc.date}</td>
                                                    <td>
                                                        <div style="font-weight: 600;">${inc.title}</div>
                                                        ${clientVal}
                                                    </td>
                                                    <td><span class="badge-category income-${inc.category}">${catLabel}</span></td>
                                                    <td><span class="receiver-span ${recClass}">${receiverLabel}</span></td>
                                                    <td><span class="${statusClass}">${statusText}</span></td>
                                                    <td style="font-weight: 700; color: #10b981; font-size: 13.5px;">¥${inc.amount.toLocaleString()}</td>
                                                    <td>
                                                        <div style="display: flex; gap: 6px;">
                                                            <button type="button" class="btn-icon-sm edit" onclick="openEditModal('incomes', '${inc.id}')" title="編集"><i data-lucide="edit-3"></i></button>
                                                            <button type="button" class="btn-icon-sm delete" onclick="deleteIncome('${inc.id}')" title="削除"><i data-lucide="trash-2"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            `;
                                        }).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <!-- 経費セクション -->
                        <div style="margin-top: 8px;">
                            <h5 style="color: #ef4444; margin-top: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 6px; font-size: 14px; font-weight: 700; border-left: 3px solid #ef4444; padding-left: 8px;">
                                <i data-lucide="trending-down" style="width: 16px; height: 16px;"></i> 経費・支出明細
                            </h5>
                            <div class="table-responsive">
                                <table class="finance-table" style="font-size: 12.5px; width: 100%;">
                                    <thead>
                                        <tr>
                                            <th>日付</th>
                                            <th>詳細内容 / 支払先店舗</th>
                                            <th>カテゴリ</th>
                                            <th>支払者</th>
                                            <th>領収書</th>
                                            <th>金額</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${data.expenses.length === 0 ? `
                                            <tr>
                                                <td colspan="7" style="text-align: center; padding: 24px; color: var(--text-muted);">この月の経費支出データはありません</td>
                                            </tr>
                                        ` : [...data.expenses].reverse().map(e => {
                                            const catLabel = getCategoryLabel(e.category);
                                            let payerLabel = e.payer === 'partnerA' ? pA : pB;
                                            const payerClass = e.payer === 'partnerA' ? 'pA' : 'pB';
                                            const merchantVal = e.merchant ? `<div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">支払先: ${e.merchant}</div>` : '';
                                            
                                            let receiptText = 'レシート有';
                                            let receiptClass = 'badge-category income-sales';
                                            if (e.receipt === 'no') { receiptText = 'レシート無'; receiptClass = 'badge-category office'; }
                                            else if (e.receipt === 'need') { receiptText = '要提出'; receiptClass = 'badge-category travel'; }

                                            return `
                                                <tr>
                                                    <td>${e.date}</td>
                                                    <td>
                                                        <div style="font-weight: 600;">${e.title}</div>
                                                        ${merchantVal}
                                                    </td>
                                                    <td><span class="badge-category ${e.category}">${catLabel}</span></td>
                                                    <td><span class="payer-span ${payerClass}">${payerLabel}</span></td>
                                                    <td><span class="${receiptClass}">${receiptText}</span></td>
                                                    <td style="font-weight: 700; color: #ef4444; font-size: 13.5px;">¥${e.amount.toLocaleString()}</td>
                                                    <td>
                                                        <div style="display: flex; gap: 6px;">
                                                            <button type="button" class="btn-icon-sm edit" onclick="openEditModal('expenses', '${e.id}')" title="編集"><i data-lucide="edit-3"></i></button>
                                                            <button type="button" class="btn-icon-sm delete" onclick="deleteExpense('${e.id}')" title="削除"><i data-lucide="trash-2"></i></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            `;
                                        }).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(div);
        });

        // アコーディオンのクリックリスナー登録
        document.querySelectorAll('.monthly-ledger-header').forEach(header => {
            header.addEventListener('click', function() {
                const month = this.getAttribute('data-month');
                const body = document.getElementById(`body-${month}`);
                const isVisible = body.style.display === 'block';
                
                body.style.display = isVisible ? 'none' : 'block';
                
                // アイコンの向きをトグル
                const arrow = this.querySelector('.accordion-arrow');
                
                if (isVisible) {
                    this.classList.remove('active');
                    this.style.borderBottom = 'none';
                    if (arrow) arrow.setAttribute('data-lucide', 'chevron-down');
                } else {
                    this.classList.add('active');
                    this.style.borderBottom = '1px solid var(--border-color)';
                    if (arrow) arrow.setAttribute('data-lucide', 'chevron-up');
                }
                
                lucide.createIcons();
            });
        });
    }

    renderFinanceChart();
    lucide.createIcons();
}

function getIncomeCategoryLabel(cat) {
    const labels = {
        sales: '売上・収益',
        investment: '自己資金・出資',
        subsidy: '助成金・補助金',
        other: 'その他収入'
    };
    return labels[cat] || cat;
}

function getCategoryLabel(cat) {
    const labels = {
        infrastructure: 'インフラ・システム',
        marketing: '広告・マーケティング',
        office: 'オフィス・スペース',
        supplies: '備品・デバイス',
        travel: '移動・交通費',
        other: 'その他'
    };
    return labels[cat] || cat;
}

function handleAddExpense(e) {
    e.preventDefault();

    const title = document.getElementById('exp-title').value.trim();
    const amount = parseInt(document.getElementById('exp-amount').value) || 0;
    const category = document.getElementById('exp-category').value;
    const payer = document.getElementById('exp-payer').value;
    const date = document.getElementById('exp-date').value;
    const merchant = document.getElementById('exp-merchant').value.trim();
    const receipt = document.getElementById('exp-receipt').value;

    if (!title || amount <= 0 || !date) {
        alert('必要なフィールドを入力してください。');
        return;
    }

    const newExpense = {
        id: 'exp-' + Date.now(),
        title: title,
        amount: amount,
        category: category,
        payer: payer,
        date: date,
        merchant: merchant || 'その他店舗',
        receipt: receipt
    };

    state.expenses.push(newExpense);
    saveState();
    renderFinancials();

    // 変更履歴への自動記帳
    const payerLabel = payer === 'partnerA' ? state.settings.partnerAName : state.settings.partnerBName;
    const catLabel = getCategoryLabel(category);
    recordChangelogAuto('💸 経費・支出の登録', `購入品「${newExpense.title}」の経費 ¥${newExpense.amount.toLocaleString()} を登録しました。 (支払者: ${payerLabel}、カテゴリ: ${catLabel}${merchant ? '、店舗: ' + merchant : ''})`);

    // リセット
    document.getElementById('exp-title').value = '';
    document.getElementById('exp-amount').value = '';
    document.getElementById('exp-merchant').value = '';
    document.getElementById('exp-date').value = new Date().toISOString().split('T')[0];
}

function deleteExpense(id) {
    const item = state.expenses.find(e => e.id === id);
    const title = item ? item.title : '経費';
    state.expenses = state.expenses.filter(e => e.id !== id);
    saveState();
    renderFinancials();
    
    // 変更履歴への自動記帳
    recordChangelogAuto('🗑️ 経費・支出の削除', `経費支出「${title}」の記録を削除しました。`);
    
    showToast(`経費「${title}」を削除しました`, 'danger');
}

function handleAddIncome(e) {
    e.preventDefault();

    const title = document.getElementById('inc-title').value.trim();
    const amount = parseInt(document.getElementById('inc-amount').value) || 0;
    const category = document.getElementById('inc-category').value;
    const receiver = document.getElementById('inc-receiver').value;
    const date = document.getElementById('inc-date').value;
    const client = document.getElementById('inc-client').value.trim();
    const status = document.getElementById('inc-status').value;

    if (!title || amount <= 0 || !date) {
        alert('必要なフィールドを入力してください。');
        return;
    }

    const newIncome = {
        id: 'inc-' + Date.now(),
        title: title,
        amount: amount,
        category: category,
        receiver: receiver,
        date: date,
        client: client || 'その他顧客',
        status: status
    };

    if (!state.incomes) state.incomes = [];
    state.incomes.push(newIncome);
    saveState();
    
    // 売上目標と動的に自動同期
    if (category === 'sales') {
        syncSalesGoals();
    }

    renderFinancials();

    // 変更履歴への自動記帳
    const receiverLabel = receiver === 'common' ? '共同プール' : (receiver === 'partnerA' ? state.settings.partnerAName : state.settings.partnerBName);
    const catLabel = getIncomeCategoryLabel(category);
    recordChangelogAuto('💵 収入・自己資金の登録', `項目「${newIncome.title}」の収入 ¥${newIncome.amount.toLocaleString()} を登録しました。 (受取先: ${receiverLabel}、カテゴリ: ${catLabel}${client ? '、取引先: ' + client : ''})`);

    // リセット
    document.getElementById('inc-title').value = '';
    document.getElementById('inc-amount').value = '';
    document.getElementById('inc-client').value = '';
    document.getElementById('inc-date').value = new Date().toISOString().split('T')[0];
}

function deleteIncome(id) {
    const item = state.incomes.find(i => i.id === id);
    const title = item ? item.title : '収入';
    state.incomes = state.incomes.filter(i => i.id !== id);
    saveState();
    renderFinancials();
    
    // 変更履歴への自動記帳
    recordChangelogAuto('🗑️ 収入データの削除', `収入項目「${title}」の記録を削除しました。`);
    
    showToast(`収入「${title}」を削除しました`, 'danger');
}

// グラフ＆収支比較の初期化
let financeChartInstance = null;

function renderFallbackFinanceChart(canvas) {
    const parent = canvas.parentElement;
    if (!parent) return;

    // すでにフォールバック表示があれば削除して再描画
    const oldFallback = parent.querySelector('.fallback-chart-container');
    if (oldFallback) oldFallback.remove();

    // canvasを非表示にする
    canvas.style.display = 'none';

    // データの集計（先月と今月）
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const thisMonthNum = currentMonth + 1;
    const thisMonthStr = `${currentYear}-${String(thisMonthNum).padStart(2, '0')}`;
    const prevMonthNum = currentMonth === 0 ? 12 : currentMonth;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonthStr = `${prevYear}-${String(prevMonthNum).padStart(2, '0')}`;

    let thisMonthIncome = 0;
    let thisMonthExpense = 0;
    let prevMonthIncome = 0;
    let prevMonthExpense = 0;

    if (state.incomes) {
        state.incomes.forEach(i => {
            if (i.date.startsWith(thisMonthStr)) thisMonthIncome += i.amount;
            else if (i.date.startsWith(prevMonthStr)) prevMonthIncome += i.amount;
        });
    }
    if (state.expenses) {
        state.expenses.forEach(e => {
            if (e.date.startsWith(thisMonthStr)) thisMonthExpense += e.amount;
            else if (e.date.startsWith(prevMonthStr)) prevMonthExpense += e.amount;
        });
    }

    const maxVal = Math.max(thisMonthIncome, thisMonthExpense, prevMonthIncome, prevMonthExpense, 10000);
    const getPct = (val) => Math.max(5, Math.min(100, Math.round((val / maxVal) * 100)));

    const fallbackHtml = document.createElement('div');
    fallbackHtml.className = 'fallback-chart-container';
    fallbackHtml.style.cssText = 'display: flex; flex-direction: column; gap: 20px; width: 100%; height: 100%; justify-content: center; padding: 10px 0;';
    fallbackHtml.innerHTML = `
        <!-- 先月 -->
        <div style="display: flex; align-items: center; gap: 16px;">
            <div style="width: 80px; font-size: 13px; font-weight: 700; color: var(--text-muted);">${prevMonthNum}月の収支</div>
            <div style="flex-grow: 1; display: flex; flex-direction: column; gap: 6px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="width: ${getPct(prevMonthIncome)}%; height: 12px; background: linear-gradient(90deg, #10b981, #34d399); border-radius: 4px; min-width: 8px; transition: width 0.3s ease;"></div>
                    <span style="font-size: 11px; font-weight: 600; color: #10b981;">収入: ¥${prevMonthIncome.toLocaleString()}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="width: ${getPct(prevMonthExpense)}%; height: 12px; background: linear-gradient(90deg, #ec4899, #f472b6); border-radius: 4px; min-width: 8px; transition: width 0.3s ease;"></div>
                    <span style="font-size: 11px; font-weight: 600; color: #ec4899;">支出: ¥${prevMonthExpense.toLocaleString()}</span>
                </div>
            </div>
        </div>
        <!-- 今月 -->
        <div style="display: flex; align-items: center; gap: 16px; border-top: 1px dashed rgba(0,0,0,0.06); padding-top: 16px;">
            <div style="width: 80px; font-size: 13px; font-weight: 700; color: var(--text-muted);">${thisMonthNum}月の収支</div>
            <div style="flex-grow: 1; display: flex; flex-direction: column; gap: 6px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="width: ${getPct(thisMonthIncome)}%; height: 12px; background: linear-gradient(90deg, #10b981, #34d399); border-radius: 4px; min-width: 8px; transition: width 0.3s ease;"></div>
                    <span style="font-size: 11px; font-weight: 600; color: #10b981;">収入: ¥${thisMonthIncome.toLocaleString()}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div style="width: ${getPct(thisMonthExpense)}%; height: 12px; background: linear-gradient(90deg, #ec4899, #f472b6); border-radius: 4px; min-width: 8px; transition: width 0.3s ease;"></div>
                    <span style="font-size: 11px; font-weight: 600; color: #ec4899;">支出: ¥${thisMonthExpense.toLocaleString()}</span>
                </div>
            </div>
        </div>
    `;
    parent.appendChild(fallbackHtml);
}

function renderFinanceChart() {
    const canvas = document.getElementById('finance-chart');
    if (!canvas) return;

    // Chart.jsが未定義（オフライン・CDNロードエラーなど）の場合の完全な保護処理
    if (typeof Chart === 'undefined') {
        renderFallbackFinanceChart(canvas);
        return;
    }

    // Chart.jsがある場合は通常描画（canvasを表示状態に戻す）
    canvas.style.display = 'block';
    const oldFallback = canvas.parentElement.querySelector('.fallback-chart-container');
    if (oldFallback) oldFallback.remove();

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    const thisMonthNum = currentMonth + 1;
    const thisMonthStr = `${currentYear}-${String(thisMonthNum).padStart(2, '0')}`;

    const prevMonthNum = currentMonth === 0 ? 12 : currentMonth;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonthStr = `${prevYear}-${String(prevMonthNum).padStart(2, '0')}`;

    let thisMonthIncome = 0;
    let thisMonthExpense = 0;
    let prevMonthIncome = 0;
    let prevMonthExpense = 0;

    if (state.incomes) {
        state.incomes.forEach(i => {
            if (i.date.startsWith(thisMonthStr)) {
                thisMonthIncome += i.amount;
            } else if (i.date.startsWith(prevMonthStr)) {
                prevMonthIncome += i.amount;
            }
        });
    }

    if (state.expenses) {
        state.expenses.forEach(e => {
            if (e.date.startsWith(thisMonthStr)) {
                thisMonthExpense += e.amount;
            } else if (e.date.startsWith(prevMonthStr)) {
                prevMonthExpense += e.amount;
            }
        });
    }

    if (financeChartInstance) {
        financeChartInstance.destroy();
    }

    const ctx = canvas.getContext('2d');
    
    financeChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [`先月 (${prevMonthNum}月)`, `今月 (${thisMonthNum}月)`],
            datasets: [
                {
                    label: '共同収入 (自己資金・売上)',
                    data: [prevMonthIncome, thisMonthIncome],
                    backgroundColor: 'rgba(16, 185, 129, 0.75)',
                    borderColor: '#10b981',
                    borderWidth: 1.5,
                    borderRadius: 6,
                    borderSkipped: false,
                },
                {
                    label: '共同支出 (経費合計)',
                    data: [prevMonthExpense, thisMonthExpense],
                    backgroundColor: 'rgba(236, 72, 153, 0.75)',
                    borderColor: '#ec4899',
                    borderWidth: 1.5,
                    borderRadius: 6,
                    borderSkipped: false,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif",
                            size: 11,
                            weight: '500'
                        },
                        boxWidth: 12,
                        boxHeight: 12,
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#1e293b',
                    bodyColor: '#1e293b',
                    borderColor: 'rgba(0, 0, 0, 0.08)',
                    borderWidth: 1,
                    padding: 12,
                    boxPadding: 6,
                    titleFont: {
                        family: "'Plus Jakarta Sans', sans-serif",
                        weight: '700'
                    },
                    bodyFont: {
                        family: "'Plus Jakarta Sans', sans-serif",
                    },
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += '¥' + context.parsed.y.toLocaleString();
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif",
                            weight: '600'
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.04)'
                    },
                    ticks: {
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif"
                        },
                        callback: function(value) {
                            return '¥' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// ==========================================
// 12.5 進捗共有・日報 (Daily Updates)
// ==========================================
function renderUpdates() {
    const container = document.getElementById('updates-timeline-list');
    if (!container) return;
    container.innerHTML = '';

    const pA = state.settings.partnerAName;
    const pB = state.settings.partnerBName;

    if (state.updates && state.updates.length > 0) {
        const sortedUpdates = [...state.updates].sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id));

        sortedUpdates.forEach(upd => {
            const authorName = upd.author === 'partnerA' ? pA : pB;
            const authorClass = upd.author === 'partnerA' ? 'pA' : 'pB';
            const avatarChar = authorName.charAt(0).toUpperCase();

            const card = document.createElement('div');
            card.className = `update-timeline-item ${upd.author}`;
            card.style.display = 'flex';
            card.style.gap = '16px';
            card.style.background = 'rgba(255, 255, 255, 0.5)';
            card.style.border = '1px solid var(--border-color)';
            card.style.borderRadius = 'var(--radius-lg)';
            card.style.padding = '20px';
            card.style.boxShadow = 'var(--shadow-sm)';
            card.style.position = 'relative';

            card.innerHTML = `
                <div class="partner-avatar ${authorClass}" style="flex-shrink: 0; width: 42px; height: 42px; font-weight: 700; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); color: #fff;">
                    ${avatarChar}
                </div>
                <div style="flex-grow: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                        <div>
                            <span style="font-weight: 700; color: var(--text-main); font-size: 15px; margin-right: 8px;">${authorName}</span>
                            <span style="color: var(--text-muted); font-size: 12px; font-weight: 500;">${upd.date}</span>
                        </div>
                        <div style="display: flex; gap: 6px; align-items: center;">
                            <button type="button" class="btn-icon-sm edit" onclick="openEditModal('updates', '${upd.id}')" title="編集" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px; border-radius: 4px; transition: all 0.2s;">
                                <i data-lucide="edit-3" style="width: 16px; height: 16px;"></i>
                            </button>
                            <button type="button" class="btn-icon-sm delete" onclick="deleteUpdate('${upd.id}')" title="削除" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px; border-radius: 4px; transition: all 0.2s;">
                                <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 12px;">
                        <h5 style="color: var(--color-green); font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
                            <i data-lucide="check-circle" style="width: 14px; height: 14px;"></i> 今日取り組んだこと (Done)
                        </h5>
                        <p style="font-size: 13px; color: var(--text-main); line-height: 1.6; white-space: pre-wrap; background: rgba(16, 185, 129, 0.02); border: 1px solid rgba(16, 185, 129, 0.08); border-radius: 6px; padding: 10px;">${upd.done}</p>
                    </div>
                    
                    <div>
                        <h5 style="color: var(--color-primary); font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
                            <i data-lucide="arrow-right-circle" style="width: 14px; height: 14px;"></i> 今後取り組むこと (To Do)
                        </h5>
                        <p style="font-size: 13px; color: var(--text-main); line-height: 1.6; white-space: pre-wrap; background: rgba(79, 70, 229, 0.02); border: 1px solid rgba(79, 70, 229, 0.08); border-radius: 6px; padding: 10px;">${upd.todo}</p>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    } else {
        container.innerHTML = `
            <div class="empty-state" style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <i data-lucide="clipboard-list" style="width: 48px; height: 48px; margin-bottom: 12px; opacity: 0.3;"></i>
                <p style="font-size: 14px;">本日の進捗報告はありません。<br>左側のフォームから「今日取り組んだこと」を共有しましょう！</p>
            </div>
        `;
    }
    lucide.createIcons();
}

function handleAddUpdate(e) {
    e.preventDefault();

    const author = document.getElementById('upd-author').value;
    const date = document.getElementById('upd-date').value;
    const done = document.getElementById('upd-done').value.trim();
    const todo = document.getElementById('upd-todo').value.trim();

    if (!author || !date || !done || !todo) {
        alert('すべての項目を入力してください。');
        return;
    }

    const newUpdate = {
        id: 'upd-' + Date.now(),
        author: author,
        date: date,
        done: done,
        todo: todo
    };

    if (!state.updates) state.updates = [];
    state.updates.push(newUpdate);
    saveState();
    renderUpdates();

    // 変更履歴への自動記帳
    const authorName = author === 'partnerA' ? state.settings.partnerAName : state.settings.partnerBName;
    recordChangelogAuto('📝 進捗共有・日報の提出', `${authorName} が進捗日報(${date})を共有しました。\n取り組んだこと: ${done}`);

    document.getElementById('upd-done').value = '';
    document.getElementById('upd-todo').value = '';
    document.getElementById('upd-date').value = new Date().toISOString().split('T')[0];
    
    alert('進捗報告をメンバーと共有しました！');
}

function deleteUpdate(id) {
    const item = state.updates.find(u => u.id === id);
    const date = item ? item.date : '';
    const author = item ? (item.author === 'partnerA' ? state.settings.partnerAName : state.settings.partnerBName) : '';
    
    state.updates = state.updates.filter(u => u.id !== id);
    saveState();
    renderUpdates();
    
    // 変更履歴への自動記帳
    recordChangelogAuto('🗑️ 進捗報告・日報の削除', `${author} の進捗日報(${date})の記録を削除しました。`);
    
    showToast('進捗共有ログを削除しました', 'danger');
}


function triggerConfetti() {
    const duration = 2500;
    const end = Date.now() + duration;
    
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '99999';
    document.body.appendChild(container);
    
    const colors = ['#ec4899', '#3b82f6', '#10b981', '#fbbf24', '#a855f7', '#06b6d4'];
    
    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval);
            setTimeout(() => container.remove(), 1000);
            return;
        }
        
        for (let i = 0; i < 6; i++) {
            const p = document.createElement('div');
            p.style.position = 'absolute';
            p.style.width = Math.random() * 8 + 6 + 'px';
            p.style.height = Math.random() * 8 + 6 + 'px';
            p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            p.style.left = '50%';
            p.style.top = '50%';
            
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 12 + 6;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity - 10;
            
            let posX = window.innerWidth / 2;
            let posY = window.innerHeight / 2;
            let currentVy = vy;
            const gravity = 0.45;
            
            let rotation = Math.random() * 360;
            let rotationSpeed = Math.random() * 12 - 6;
            
            let opacity = 1;
            
            const pInterval = setInterval(() => {
                posX += vx;
                posY += currentVy;
                currentVy += gravity;
                rotation += rotationSpeed;
                opacity -= 0.025;
                
                p.style.left = posX + 'px';
                p.style.top = posY + 'px';
                p.style.transform = `rotate(${rotation}deg)`;
                p.style.opacity = opacity;
                
                if (opacity <= 0 || posY > window.innerHeight || posX < 0 || posX > window.innerWidth) {
                    clearInterval(pInterval);
                    p.remove();
                }
            }, 16);
            
            container.appendChild(p);
        }
    }, 40);
}
window.triggerConfetti = triggerConfetti;

function clearSettlement() {
    const pA = state.settings.partnerAName;
    const pB = state.settings.partnerBName;

    // 清算額の算出
    let totalExpense = 0;
    let pAPaid = 0;
    let pBPaid = 0;
    state.expenses.forEach(e => {
        totalExpense += e.amount;
        if (e.payer === 'partnerA') pAPaid += e.amount;
        else pBPaid += e.amount;
    });

    const pAShare = state.agreement.pAShare;
    const pAShouldPay = totalExpense * (pAShare / 100);

    let info = '';
    if (pAPaid > pAShouldPay) {
        const diff = Math.round(pAPaid - pAShouldPay);
        info = `${pB} から ${pA} への ¥${diff.toLocaleString()} の支払いが完了したため清算記録をリセットします。`;
    } else {
        const diff = Math.round(pAShouldPay - pAPaid);
        info = `${pA} から ${pB} への ¥${diff.toLocaleString()} の支払いが完了したため清算記録をリセットします。`;
    }

    if (confirm(info + '\nよろしいですか？\n※現在の経費履歴はクリア（またはリセット）され、清算完了ログが意思決定として記録されます。')) {
        // 意思決定ログに自動記録
        addSystemDecision('経費清算完了の合意', `${info}（累計共同経費総額: ¥${totalExpense.toLocaleString()}）`);
        
        // 経費履歴をリセット
        state.expenses = [];
        saveState();
        renderFinancials();
        
        // 紙吹雪エフェクトを盛大に発火！
        triggerConfetti();
    }
}

// ==========================================
// 11. アイディアボード (Idea Board sticky notes)
// ==========================================
function renderIdeas() {
    const grid = document.getElementById('ideas-board-grid');
    grid.innerHTML = '';

    const pA = state.settings.partnerAName;
    const pB = state.settings.partnerBName;

    const activeSubtab = state.ideasActiveSubtab || 'active';
    
    // サブタブボタンの active スタイル動的適用
    const tabActive = document.getElementById('subtab-ideas-active');
    const tabCompleted = document.getElementById('subtab-ideas-completed');
    if (tabActive && tabCompleted) {
        if (activeSubtab === 'active') {
            tabActive.classList.add('active');
            tabActive.style.borderBottomColor = 'var(--color-primary)';
            tabActive.style.color = 'var(--color-primary)';
            tabCompleted.classList.remove('active');
            tabCompleted.style.borderBottomColor = 'transparent';
            tabCompleted.style.color = 'var(--text-muted)';
        } else {
            tabCompleted.classList.add('active');
            tabCompleted.style.borderBottomColor = 'var(--color-primary)';
            tabCompleted.style.color = 'var(--color-primary)';
            tabActive.classList.remove('active');
            tabActive.style.borderBottomColor = 'transparent';
            tabActive.style.color = 'var(--text-muted)';
        }
    }

    // アイデアをフィルタリング
    const filteredIdeas = state.ideas.filter(idea => {
        const status = idea.status || 'active';
        return status === activeSubtab;
    });

    if (filteredIdeas.length > 0) {
        filteredIdeas.forEach(idea => {
            const card = document.createElement('div');
            card.className = `idea-sticky`;
            card.setAttribute('data-idea-id', idea.id);
            
            const isLikedByMe = idea.likes.includes('partnerA');
            const likedClass = isLikedByMe ? 'liked' : '';
            const authorLabel = idea.author === 'partnerA' ? pA : pB;

            // 完了ステータスに応じた完了マーク
            const isCompleted = (idea.status || 'active') === 'completed';
            const completedTag = isCompleted ? `<span style="font-size: 10px; background: rgba(16, 185, 129, 0.1); color: var(--color-success); padding: 2px 6px; border-radius: 4px; font-weight: 700; margin-left: 8px; display: inline-flex; align-items: center; gap: 3px;"><i data-lucide="check" style="width: 10px; height: 10px;"></i>完了済</span>` : '';

            // 完了/元に戻すボタンの切り替え
            let completeActionBtn = '';
            if (isCompleted) {
                completeActionBtn = `
                    <button type="button" class="btn-icon-sm edit" onclick="event.stopPropagation(); revertIdea('${idea.id}')" title="進行中に戻す" style="width: 28px; height: 28px; border-radius: 50%; color: var(--color-primary); border-color: rgba(79, 70, 229, 0.2); background: rgba(79, 70, 229, 0.05);">
                        <i data-lucide="rotate-ccw" style="width: 14px; height: 14px;"></i>
                    </button>
                `;
            } else {
                completeActionBtn = `
                    <button type="button" class="btn-icon-sm edit" onclick="event.stopPropagation(); completeIdea('${idea.id}')" title="このアイデアを実行・完了にする" style="width: 28px; height: 28px; border-radius: 50%; color: var(--color-success); border-color: rgba(16, 185, 129, 0.2); background: rgba(16, 185, 129, 0.05);">
                        <i data-lucide="check-square" style="width: 14px; height: 14px;"></i>
                    </button>
                `;
            }

            card.innerHTML = `
                <div class="idea-header-clickable" onclick="toggleIdeaAccordion('${idea.id}')">
                    <div class="idea-header-title-section">
                        <i data-lucide="chevron-down" class="idea-chevron-icon" style="width: 16px; height: 16px; flex-shrink: 0; color: var(--text-muted);"></i>
                        <span class="idea-color-dot ${idea.color || 'yellow'}"></span>
                        <h4 style="display: flex; align-items: center; flex-wrap: wrap;">${idea.title} ${completedTag}</h4>
                    </div>
                    <div class="idea-header-meta">
                        <span class="idea-author">提案者: ${authorLabel}</span>
                        <span class="idea-date">${idea.date}</span>
                        <span class="badge-likes" style="display: flex; align-items: center; gap: 4px; font-weight: 700; color: var(--color-pink);">
                            <i data-lucide="heart" style="width: 12px; height: 12px; fill: ${isLikedByMe ? 'currentColor' : 'none'};"></i>
                            ${idea.likes.length}
                        </span>
                    </div>
                </div>
                <div class="idea-body-collapse">
                    <div style="padding-top: 12px; border-top: 1px solid #f1f5f9; margin-bottom: 16px;">
                        <p style="font-size: 14.5px; line-height: 1.8; white-space: pre-wrap; margin: 0; color: var(--text-primary); font-weight: 500; background-color: #f8fafc; padding: 16px 20px; border-radius: var(--border-radius-md); border: 1.5px solid #f1f5f9; letter-spacing: 0.2px;">${idea.desc}</p>
                    </div>
                    <div class="idea-footer" style="margin-top: 0; padding-top: 10px; border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between; align-items: center;">
                        <div class="idea-actions-flex">
                            <button class="btn-reaction ${likedClass}" onclick="event.stopPropagation(); toggleIdeaLike('${idea.id}')" title="いいね！" style="padding: 3px 8px; font-size: 11px;">
                                <i data-lucide="heart" style="width: 12px; height: 12px; fill: ${isLikedByMe ? 'currentColor' : 'none'};"></i> 
                                <span>${idea.likes.length} 人がいいね！</span>
                            </button>
                        </div>
                        <div style="display: flex; gap: 6px; align-items: center;">
                            <!-- 💬 Card Comment Icon -->
                            ${(() => {
                                const iChats = (state.cardChats || []).filter(c => c.cardId === idea.id);
                                const count = iChats.length;
                                return `
                                    <button type="button" class="btn-icon-sm" onclick="event.stopPropagation(); openCardChatPanel('${idea.id}', '${idea.title.replace(/'/g, "\\'")}')" title="一言チャット" style="width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; position: relative; color: ${count > 0 ? 'var(--color-pink)' : 'var(--text-muted)'}; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06);">
                                        <i data-lucide="message-square" style="width: 14px; height: 14px;"></i>
                                        ${count > 0 ? `<span style="font-size: 8px; font-weight: bold; background: var(--color-pink); color: white; padding: 1px 4px; border-radius: 6px; position: absolute; top: -4px; right: -4px; z-index: 5;">${count}</span>` : ''}
                                    </button>
                                `;
                            })()}
                            ${completeActionBtn}
                            <button type="button" class="btn-icon-sm edit" onclick="event.stopPropagation(); openEditModal('ideas', '${idea.id}')" title="編集" style="width: 28px; height: 28px; border-radius: 50%; color: var(--text-muted);">
                                <i data-lucide="edit-3" style="width: 14px; height: 14px;"></i>
                            </button>
                            <button type="button" class="btn-icon-sm delete" onclick="event.stopPropagation(); deleteIdea('${idea.id}')" title="削除" style="width: 28px; height: 28px; border-radius: 50%; color: var(--text-muted);">
                                <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    } else {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; width: 100%; padding: 40px 20px;">
                <i data-lucide="lightbulb" style="width: 40px; height: 40px;"></i>
                <p>${activeSubtab === 'active' ? '進行中のアイデアはありません。上のボタンから最初のアイデアを投稿しましょう！' : '完了したアイデアはありません。進行中の付箋の「完了」ボタンを押して登録しましょう！'}</p>
            </div>
        `;
    }
    lucide.createIcons();

    // 長押し並び替えイベントをアタッチ
    initSortable('ideas-board-grid', '.idea-sticky', 'ideas', renderIdeas);
}

function toggleIdeaAccordion(id) {
    const card = document.querySelector(`.idea-sticky[data-idea-id="${id}"]`);
    if (card) {
        card.classList.toggle('active');
    }
}

function addIdea() {
    const title = document.getElementById('idea-title').value.trim();
    const desc = document.getElementById('idea-desc').value.trim();
    const color = document.querySelector('input[name="idea-color"]:checked').value;

    if (!title || !desc) {
        alert('タイトルと詳細を入力してください。');
        return;
    }

    const newIdea = {
        id: 'idea-' + Date.now(),
        title: title,
        desc: desc,
        color: color,
        author: 'partnerA', // アプリ使用者は基本パートナーA（アリス）として振る舞う
        date: new Date().toISOString().split('T')[0],
        likes: [],
        status: 'active'
    };

    state.ideas.push(newIdea);
    saveState();
    renderIdeas();

    // 変更履歴への自動記帳
    recordChangelogAuto('💡 新規アイデアの提案', `アイデア付箋「${newIdea.title}」をボードに投稿しました。\n内容: ${newIdea.desc}`);

    // リセット
    document.getElementById('idea-title').value = '';
    document.getElementById('idea-desc').value = '';
    closeModal('modal-add-idea');
}

function deleteIdea(id) {
    const item = state.ideas.find(i => i.id === id);
    const title = item ? item.title : 'アイデア';
    state.ideas = state.ideas.filter(i => i.id !== id);
    saveState();
    renderIdeas();
    
    // 変更履歴への自動記帳
    recordChangelogAuto('🗑️ アイデアの削除', `アイデア付箋「${title}」をはがしました。`);
    
    showToast(`アイデア付箋「${title}」をはがしました`, 'danger');
}

function toggleIdeaLike(id) {
    const idea = state.ideas.find(i => i.id === id);
    if (idea) {
        const idx = idea.likes.indexOf('partnerA');
        if (idx > -1) {
            idea.likes.splice(idx, 1);
        } else {
            idea.likes.push('partnerA');
        }
        saveState();
        renderIdeas();
    }
}

function completeIdea(id) {
    const idea = state.ideas.find(i => i.id === id);
    if (!idea) return;

    idea.status = 'completed';
    state.ideasActiveSubtab = 'completed'; // 「完了したアイデア」サブタブに自動移動！
    saveState();
    
    // 変更履歴への自動記帳
    recordChangelogAuto('✅ アイデアの完了', `提案アイデア「${idea.title}」を実行・完了しました！`);
    
    renderIdeas();
    showToast(`アイデア「${idea.title}」を完了に移動しました！`, 'success');
}

function revertIdea(id) {
    const idea = state.ideas.find(i => i.id === id);
    if (!idea) return;

    idea.status = 'active';
    state.ideasActiveSubtab = 'active'; // 進行中に自動移動！
    saveState();
    
    // 変更履歴への自動記帳
    recordChangelogAuto('🔄 アイデアを進行中に戻す', `完了したアイデア「${idea.title}」を進行中に戻しました。`);
    
    renderIdeas();
    showToast(`アイデア「${idea.title}」を進行中に戻しました。`);
}

function switchIdeasSubtab(subtab) {
    state.ideasActiveSubtab = subtab;
    saveState();
    renderIdeas();
}

window.completeIdea = completeIdea;
window.revertIdea = revertIdea;
window.switchIdeasSubtab = switchIdeasSubtab;

// ==========================================
// 12. 意思決定ログ (Decision Log)
// ==========================================
function renderDecisions() {
    const container = document.getElementById('decisions-timeline-list');
    container.innerHTML = '';

    const pA = state.settings.partnerAName;
    const pB = state.settings.partnerBName;

    if (state.decisions.length > 0) {
        // 新しい決定から表示
        [...state.decisions].reverse().forEach((dec, idx) => {
            const card = document.createElement('div');
            card.className = 'decision-item';
            card.innerHTML = `
                <div class="decision-icon-marker">
                    <i data-lucide="handshake"></i>
                </div>
                <div class="decision-card">
                    <div class="decision-meta">
                        <span class="decision-date-badge">${dec.date}</span>
                        <span class="decision-signer-badge">
                            <i data-lucide="check-circle-2"></i> ${pA} & ${pB} 署名合意済
                        </span>
                    </div>
                    <h3>${dec.title}</h3>
                    <div class="decision-body">
                        <h4>決定理由 & 合意の背景</h4>
                        <p>${dec.reason}</p>
                    </div>
                    <div class="decision-actions" style="display: flex; gap: 6px;">
                        <button type="button" class="btn-icon-sm edit" onclick="openEditModal('decisions', '${dec.id}')" title="編集">
                            <i data-lucide="edit-3"></i>
                        </button>
                        <button type="button" class="btn-icon-sm delete" onclick="deleteDecision('${dec.id}')" title="削除">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    } else {
        container.innerHTML = `
            <div class="empty-state">
                <i data-lucide="book-open"></i>
                <p>登録された意思決定はありません。上のボタンから追加してください。</p>
            </div>
        `;
    }
    lucide.createIcons();
}

function addDecision() {
    const title = document.getElementById('dec-title').value.trim();
    const reason = document.getElementById('dec-reason').value.trim();
    const date = document.getElementById('dec-date').value;

    if (!title || !reason || !date) {
        alert('すべてのフィールドを入力してください。');
        return;
    }

    const newDec = {
        id: 'dec-' + Date.now(),
        title: title,
        reason: reason,
        date: date
    };

    state.decisions.push(newDec);
    saveState();
    renderDecisions();

    // 変更履歴への自動記帳
    recordChangelogAuto('🤝 共同経営合意の記録', `決定事項「${newDec.title}」を記録しました。\n理由・詳細: ${newDec.reason}`);

    // リセット
    document.getElementById('dec-title').value = '';
    document.getElementById('dec-reason').value = '';
    closeModal('modal-add-decision');
}

function deleteDecision(id) {
    const item = state.decisions.find(d => d.id === id);
    const title = item ? item.title : '決定事項';
    state.decisions = state.decisions.filter(d => d.id !== id);
    saveState();
    renderDecisions();
    
    // 変更履歴への自動記帳
    recordChangelogAuto('🗑️ 経営合意ログの削除', `決定事項「${title}」の記録を削除しました。`);
    
    showToast(`意思決定ログ「${title}」を削除しました`, 'danger');
}

// ==========================================
// 13. データのエクスポート & インポート
// ==========================================
function exportData() {
    const dataStr = JSON.stringify(state, null, 4);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${state.settings.projectName}_cofounder_hub_data_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function triggerImport() {
    document.getElementById('import-file').click();
}

function handleImport(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        try {
            const imported = JSON.parse(evt.target.result);
            
            // 簡単なデータ検証
            if (imported.settings && imported.agreement && Array.isArray(imported.goals)) {
                if (confirm('既存のデータがすべてインポートした内容に上書きされます。よろしいですか？')) {
                    state = imported;
                    saveState();
                    
                    // 表示全更新
                    applyDynamicNames();
                    const activeTab = document.querySelector('.nav-item.active').getAttribute('data-tab');
                    switchTab(activeTab);
                    
                    alert('データのインポートに成功しました！');
                }
            } else {
                alert('無効なデータ形式です。インポートできません。');
            }
        } catch (err) {
            alert('ファイルの読み込みに失敗しました: ' + err.message);
        }
    };
    reader.readAsText(file);
}

function resetState(e) {
    if (e && e.preventDefault) e.preventDefault();
    openModal('modal-reset-confirm');
}

function executeResetState(e) {
    if (e && e.preventDefault) e.preventDefault();
    
    state = JSON.parse(JSON.stringify(EMPTY_STATE));
    saveState();
    
    // 画面の表示を全更新
    applyDynamicNames();
    
    // ダッシュボード等も含めタブを安全に再ロード
    const activeTabEl = document.querySelector('.nav-item.active');
    const activeTab = activeTabEl ? activeTabEl.getAttribute('data-tab') : 'dashboard';
    switchTab(activeTab);
    
    closeModal('modal-reset-confirm');
    
    alert('すべてのデータを削除し、まっさらな状態のワークスペースを初期化しました！\n左下の「設定（歯車）」アイコンから、お二人の名前とプロジェクト名を入力して開始してください！');
}

// ==========================================
// 15. 汎用項目編集ロジック (Generic Item Edit)
// ==========================================
function openEditModal(type, id) {
    const list = state[type];
    if (!list) return;
    const item = list.find(x => x.id === id);
    if (!item) return;

    const modalTitle = document.getElementById('edit-modal-title');
    const modalBody = document.getElementById('edit-modal-body-content');
    const saveBtn = document.getElementById('btn-save-edit');

    // タイトル設定
    const typeLabels = {
        phases: 'フェーズの編集',
        goals: '目標の編集',
        events: '予定の編集',
        expenses: '経費・支出の編集',
        incomes: '収入の編集',
        ideas: 'アイデアの編集',
        decisions: '意思決定事項の編集',
        updates: '進捗日報の編集',
        customers: '顧客情報の編集'
    };
    if (modalTitle) modalTitle.textContent = typeLabels[type] || '項目の編集';

    // フォームの動的生成
    let html = '';
    if (type === 'phases') {
        html = `
            <div class="form-group">
                <label>フェーズ名</label>
                <input type="text" id="edit-phase-title" value="${item.title.replace(/"/g, '&quot;')}" required style="width: 100%;">
            </div>
            <div class="form-group">
                <label>期間・期限</label>
                <input type="text" id="edit-phase-period" value="${item.period.replace(/"/g, '&quot;')}" required style="width: 100%;">
            </div>
            <div class="form-group">
                <label>主な注力テーマ・説明</label>
                <textarea id="edit-phase-description" rows="3" required style="width: 100%; font-family: inherit; font-size: 13px; padding: 10px; border: 1px solid var(--border-color); border-radius: var(--radius-md);">${item.description}</textarea>
            </div>
        `;
    } else if (type === 'goals') {
        html = `
            <div class="form-group">
                <label>目標タイトル</label>
                <input type="text" id="edit-goal-title" value="${item.title.replace(/"/g, '&quot;')}" required style="width: 100%;">
            </div>
            <div class="form-group">
                <label>担当者</label>
                <select id="edit-goal-assignee" style="width: 100%;">
                    <option value="both" ${item.assignee === 'both' ? 'selected' : ''}>2人共同</option>
                    <option value="partnerA" ${item.assignee === 'partnerA' ? 'selected' : ''}>${state.settings.partnerAName}</option>
                    <option value="partnerB" ${item.assignee === 'partnerB' ? 'selected' : ''}>${state.settings.partnerBName}</option>
                </select>
            </div>
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <div class="form-group">
                    <label>現在値</label>
                    <input type="number" id="edit-goal-current" value="${item.current}" min="0" required style="width: 100%;">
                </div>
                <div class="form-group">
                    <label>目標値</label>
                    <input type="number" id="edit-goal-target" value="${item.target}" min="1" required style="width: 100%;">
                </div>
            </div>
            <div class="form-group">
                <label>単位</label>
                <input type="text" id="edit-goal-unit" value="${item.unit.replace(/"/g, '&quot;')}" required style="width: 100%;">
            </div>
            <div class="form-group">
                <label>期限</label>
                <input type="date" id="edit-goal-deadline" value="${item.deadline}" required style="width: 100%;">
            </div>
        `;
    } else if (type === 'events') {
        html = `
            <div class="form-group">
                <label>イベント名</label>
                <input type="text" id="edit-evt-title" value="${item.title.replace(/"/g, '&quot;')}" required style="width: 100%;">
            </div>
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <div class="form-group">
                    <label>日付</label>
                    <input type="date" id="edit-evt-date" value="${item.date}" required style="width: 100%;">
                </div>
                <div class="form-group">
                    <label>時間</label>
                    <input type="time" id="edit-evt-time" value="${item.time || '10:00'}" style="width: 100%;">
                </div>
            </div>
            <div class="form-group">
                <label>タイプ</label>
                <select id="edit-evt-type" style="width: 100%;">
                    <option value="meeting" ${item.type === 'meeting' ? 'selected' : ''}>ミーティング / 打合せ</option>
                    <option value="deadline" ${item.type === 'deadline' ? 'selected' : ''}>デッドライン / 締切</option>
                    <option value="milestone" ${item.type === 'milestone' ? 'selected' : ''}>マイルストーン / 節目</option>
                    <option value="other" ${item.type === 'other' ? 'selected' : ''}>その他</option>
                </select>
            </div>
            <div class="form-group">
                <label>メモ・場所</label>
                <input type="text" id="edit-evt-notes" value="${(item.notes || '').replace(/"/g, '&quot;')}" style="width: 100%;">
            </div>
        `;
    } else if (type === 'expenses') {
        html = `
            <div class="form-group">
                <label>経費名・購入品</label>
                <input type="text" id="edit-exp-title" value="${item.title.replace(/"/g, '&quot;')}" required style="width: 100%;">
            </div>
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <div class="form-group">
                    <label>金額 (円)</label>
                    <input type="number" id="edit-exp-amount" value="${item.amount}" min="1" required style="width: 100%;">
                </div>
                <div class="form-group">
                    <label>カテゴリ</label>
                    <select id="edit-exp-category" style="width: 100%;">
                        <option value="infrastructure" ${item.category === 'infrastructure' ? 'selected' : ''}>インフラ・システム</option>
                        <option value="marketing" ${item.category === 'marketing' ? 'selected' : ''}>広告・マーケティング</option>
                        <option value="office" ${item.category === 'office' ? 'selected' : ''}>オフィス・スペース</option>
                        <option value="supplies" ${item.category === 'supplies' ? 'selected' : ''}>備品・デバイス</option>
                        <option value="travel" ${item.category === 'travel' ? 'selected' : ''}>移動・交通費</option>
                        <option value="other" ${item.category === 'other' ? 'selected' : ''}>その他</option>
                    </select>
                </div>
            </div>
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <div class="form-group">
                    <label>支払先・購入店舗</label>
                    <input type="text" id="edit-exp-merchant" value="${(item.merchant || '').replace(/"/g, '&quot;')}" placeholder="例: AWS, Amazon" style="width: 100%;">
                </div>
                <div class="form-group">
                    <label>領収書ステータス</label>
                    <select id="edit-exp-receipt" style="width: 100%;">
                        <option value="yes" ${item.receipt === 'yes' ? 'selected' : ''}>領収書・レシートあり</option>
                        <option value="no" ${item.receipt === 'no' ? 'selected' : ''}>なし (紛失/不発行)</option>
                        <option value="need" ${item.receipt === 'need' ? 'selected' : ''}>要提出・取り寄せ中</option>
                    </select>
                </div>
            </div>
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <div class="form-group">
                    <label>支払った人</label>
                    <select id="edit-exp-payer" style="width: 100%;">
                        <option value="partnerA" ${item.payer === 'partnerA' ? 'selected' : ''}>${state.settings.partnerAName}</option>
                        <option value="partnerB" ${item.payer === 'partnerB' ? 'selected' : ''}>${state.settings.partnerBName}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>日付</label>
                    <input type="date" id="edit-exp-date" value="${item.date}" required style="width: 100%;">
                </div>
            </div>
        `;
    } else if (type === 'incomes') {
        html = `
            <div class="form-group">
                <label>収入名・自己資金出資</label>
                <input type="text" id="edit-inc-title" value="${item.title.replace(/"/g, '&quot;')}" required style="width: 100%;">
            </div>
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <div class="form-group">
                    <label>金額 (円)</label>
                    <input type="number" id="edit-inc-amount" value="${item.amount}" min="1" required style="width: 100%;">
                </div>
                <div class="form-group">
                    <label>カテゴリ</label>
                    <select id="edit-inc-category" style="width: 100%;">
                        <option value="sales" ${item.category === 'sales' ? 'selected' : ''}>売上・収益</option>
                        <option value="investment" ${item.category === 'investment' ? 'selected' : ''}>自己資金・出資</option>
                        <option value="subsidy" ${item.category === 'subsidy' ? 'selected' : ''}>助成金・補助金</option>
                        <option value="other" ${item.category === 'other' ? 'selected' : ''}>その他収入</option>
                    </select>
                </div>
            </div>
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <div class="form-group">
                    <label>取引先・顧客名</label>
                    <input type="text" id="edit-inc-client" value="${(item.client || '').replace(/"/g, '&quot;')}" placeholder="例: 〇〇株式会社, 煌記（出資）" style="width: 100%;">
                </div>
                <div class="form-group">
                    <label>入金ステータス</label>
                    <select id="edit-inc-status" style="width: 100%;">
                        <option value="received" ${item.status === 'received' ? 'selected' : ''}>入金完了</option>
                        <option value="pending" ${item.status === 'pending' ? 'selected' : ''}>未入金 (請求中)</option>
                    </select>
                </div>
            </div>
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <div class="form-group">
                    <label>入金先・受取人</label>
                    <select id="edit-inc-receiver" style="width: 100%;">
                        <option value="partnerA" ${item.receiver === 'partnerA' ? 'selected' : ''}>${state.settings.partnerAName}</option>
                        <option value="partnerB" ${item.receiver === 'partnerB' ? 'selected' : ''}>${state.settings.partnerBName}</option>
                        <option value="common" ${item.receiver === 'common' ? 'selected' : ''}>共同口座/プール</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>入金日</label>
                    <input type="date" id="edit-inc-date" value="${item.date}" required style="width: 100%;">
                </div>
            </div>
        `;
    } else if (type === 'ideas') {
        html = `
            <div class="form-group">
                <label>アイデアのタイトル</label>
                <input type="text" id="edit-idea-title" value="${item.title.replace(/"/g, '&quot;')}" required style="width: 100%;">
            </div>
            <div class="form-group">
                <label>詳細・メモ</label>
                <textarea id="edit-idea-desc" rows="4" required style="width: 100%; font-family: inherit; font-size: 13px; padding: 10px; border: 1px solid var(--border-color); border-radius: var(--radius-md);">${item.desc}</textarea>
            </div>
            <div class="form-group">
                <label>付箋のカラー</label>
                <div class="color-picker-grid" style="display: flex; gap: 8px;">
                    ${['yellow', 'blue', 'green', 'pink', 'purple'].map(c => `
                        <label class="color-opt ${c} ${item.color === c ? 'active' : ''}" style="width: 24px; height: 24px; border-radius: 50%; display: inline-block; cursor: pointer; border: 2px solid transparent; position: relative;">
                            <input type="radio" name="edit-idea-color" value="${c}" ${item.color === c ? 'checked' : ''} style="display: none;">
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (type === 'decisions') {
        html = `
            <div class="form-group">
                <label>決定された事項</label>
                <input type="text" id="edit-dec-title" value="${item.title.replace(/"/g, '&quot;')}" required style="width: 100%;">
            </div>
            <div class="form-group">
                <label>決定の背景・理由</label>
                <textarea id="edit-dec-reason" rows="3" required style="width: 100%; font-family: inherit; font-size: 13px; padding: 10px; border: 1px solid var(--border-color); border-radius: var(--radius-md);">${item.reason}</textarea>
            </div>
            <div class="form-group">
                <label>合意日</label>
                <input type="date" id="edit-dec-date" value="${item.date}" required style="width: 100%;">
            </div>
        `;
    } else if (type === 'updates') {
        html = `
            <div class="form-group">
                <label>報告日付</label>
                <input type="date" id="edit-upd-date" value="${item.date}" required style="width: 100%;">
            </div>
            <div class="form-group">
                <label style="color: var(--color-green); font-weight: 600;">今日取り組んだこと (Done)</label>
                <textarea id="edit-upd-done" rows="4" required style="width: 100%; font-family: inherit; font-size: 13px; padding: 10px; border: 1px solid var(--border-color); border-radius: var(--radius-md);">${item.done}</textarea>
            </div>
            <div class="form-group">
                <label style="color: var(--color-primary); font-weight: 600;">今後取り組むこと (To Do)</label>
                <textarea id="edit-upd-todo" rows="4" required style="width: 100%; font-family: inherit; font-size: 13px; padding: 10px; border: 1px solid var(--border-color); border-radius: var(--radius-md);">${item.todo}</textarea>
            </div>
        `;
    } else if (type === 'customers') {
        html = `
            <div class="form-group">
                <label>顧客名 / 団体名</label>
                <input type="text" id="edit-cust-name" value="${item.name.replace(/"/g, '&quot;')}" required style="width: 100%;">
            </div>
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <div class="form-group">
                    <label>年齢・世代</label>
                    <select id="edit-cust-age" style="width: 100%;">
                        <option value="20代" ${item.age === '20代' ? 'selected' : ''}>20代</option>
                        <option value="30代" ${item.age === '30代' ? 'selected' : ''}>30代</option>
                        <option value="40代" ${item.age === '40代' ? 'selected' : ''}>40代</option>
                        <option value="50代" ${item.age === '50代' ? 'selected' : ''}>50代</option>
                        <option value="60代以上" ${item.age === '60代以上' ? 'selected' : ''}>60代以上</option>
                        <option value="10代以下" ${item.age === '10代以下' ? 'selected' : ''}>10代以下</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>国籍</label>
                    <input type="text" id="edit-cust-country" value="${item.country.replace(/"/g, '&quot;')}" required style="width: 100%;">
                </div>
            </div>
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <div class="form-group">
                    <label>購入プラン</label>
                    <select id="edit-cust-plan" style="width: 100%;">
                        <option value="スタンダード" ${item.plan === 'スタンダード' ? 'selected' : ''}>スタンダード</option>
                        <option value="プロ" ${item.plan === 'プロ' ? 'selected' : ''}>プロ</option>
                        <option value="プレミアム" ${item.plan === 'プレミアム' ? 'selected' : ''}>プレミアム</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>契約期間</label>
                    <select id="edit-cust-duration" style="width: 100%;">
                        <option value="1週間" ${item.duration === '1週間' ? 'selected' : ''}>1週間</option>
                        <option value="2週間" ${item.duration === '2週間' ? 'selected' : ''}>2週間</option>
                        <option value="1ヶ月" ${item.duration === '1ヶ月' ? 'selected' : ''}>1ヶ月</option>
                    </select>
                </div>
            </div>
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <div class="form-group">
                    <label>売上金額 (円)</label>
                    <input type="number" id="edit-cust-amount" value="${item.amount}" min="1" required style="width: 100%;">
                </div>
                <div class="form-group">
                    <label>購入日</label>
                    <input type="date" id="edit-cust-date" value="${item.date}" required style="width: 100%;">
                </div>
            </div>
            <div class="form-group">
                <label>顧客メモ・特記事項</label>
                <textarea id="edit-cust-memo" rows="3" style="width: 100%; font-family: inherit; font-size: 13px; padding: 10px; border: 1px solid var(--border-color); border-radius: var(--radius-md);">${item.memo || ''}</textarea>
            </div>
            <div class="form-group" style="margin-top: 12px; border-top: 1px dashed var(--border-color); padding-top: 12px;">
                <label style="font-weight: 750; color: var(--color-primary); display: flex; align-items: center; gap: 4px;">
                    <i data-lucide="clipboard-list" style="width: 16px; height: 16px;"></i> LumiJourney ヒアリングシート (Zoom面談用)
                </label>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 8px;">
                    <div class="form-group" style="margin-bottom: 0;">
                        <label style="font-size: 11px;">旅行目的地 (国・都市)</label>
                        <input type="text" id="edit-cust-hear-destination" value="${(item.hearDestination || '').replace(/"/g, '&quot;')}" placeholder="例: 東京、京都、金沢" style="padding: 6px 10px; font-size: 12px; border-radius: 6px; border: 1px solid var(--border-color); width: 100%;">
                    </div>
                    <div class="form-group" style="margin-bottom: 0;">
                        <label style="font-size: 11px;">予算クラス</label>
                        <select id="edit-cust-hear-budget" style="padding: 6px 10px; font-size: 12px; border-radius: 6px; border: 1px solid var(--border-color); width: 100%;">
                            <option value="standard" ${item.hearBudget === 'standard' ? 'selected' : ''}>標準 (一般的なホテル・体験)</option>
                            <option value="budget" ${item.hearBudget === 'budget' ? 'selected' : ''}>節約 (ドミトリー・格安メイン)</option>
                            <option value="luxury" ${item.hearBudget === 'luxury' ? 'selected' : ''}>贅沢 (高級宿・プライベートガイド)</option>
                        </select>
                    </div>
                    <div class="form-group" style="margin-bottom: 0;">
                        <label style="font-size: 11px;">旅のペース</label>
                        <select id="edit-cust-hear-pace" style="padding: 6px 10px; font-size: 12px; border-radius: 6px; border: 1px solid var(--border-color); width: 100%;">
                            <option value="moderate" ${item.hearPace === 'moderate' ? 'selected' : ''}>のんびり (観光は1日2-3箇所)</option>
                            <option value="active" ${item.hearPace === 'active' ? 'selected' : ''}>アクティブ (朝から夜まで満喫)</option>
                        </select>
                    </div>
                    <div class="form-group" style="margin-bottom: 0; display: flex; flex-direction: column; justify-content: flex-end; padding-bottom: 4px;">
                        <label style="font-size: 11px; margin-bottom: 6px;">特別な配慮・要望</label>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <label style="font-size: 11.5px; display: inline-flex; align-items: center; gap: 4px; font-weight: 500; cursor: pointer;">
                                <input type="checkbox" id="edit-cust-hear-req-allergy" ${item.hearReqAllergy ? 'checked' : ''}> アレルギー
                            </label>
                            <label style="font-size: 11.5px; display: inline-flex; align-items: center; gap: 4px; font-weight: 500; cursor: pointer;">
                                <input type="checkbox" id="edit-cust-hear-req-family" ${item.hearReqFamily ? 'checked' : ''}> 家族・子供連れ
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    if (modalBody) modalBody.innerHTML = html;
    
    // アイデア編集のカラーピッカーイベントバインド
    if (type === 'ideas') {
        modalBody.querySelectorAll('.color-opt').forEach(opt => {
            opt.addEventListener('click', () => {
                modalBody.querySelectorAll('.color-opt').forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                opt.querySelector('input').checked = true;
            });
        });
    }

    // 保存ボタンの onclick イベント割り当て
    if (saveBtn) saveBtn.onclick = () => saveEditItem(type, id);

    openModal('modal-edit-item');
}

function saveEditItem(type, id) {
    const list = state[type];
    if (!list) return;
    const item = list.find(x => x.id === id);
    if (!item) return;

    if (type === 'phases') {
        item.title = document.getElementById('edit-phase-title').value.trim();
        item.period = document.getElementById('edit-phase-period').value.trim();
        item.description = document.getElementById('edit-phase-description').value.trim();
        if (!item.title || !item.period || !item.description) {
            alert('すべてのフィールドを入力してください。');
            return;
        }
    } else if (type === 'goals') {
        item.title = document.getElementById('edit-goal-title').value.trim();
        item.assignee = document.getElementById('edit-goal-assignee').value;
        item.current = parseInt(document.getElementById('edit-goal-current').value) || 0;
        item.target = parseInt(document.getElementById('edit-goal-target').value) || 1;
        item.unit = document.getElementById('edit-goal-unit').value.trim();
        item.deadline = document.getElementById('edit-goal-deadline').value;
        if (!item.title || !item.deadline || !item.unit) {
            alert('すべてのフィールドを入力してください。');
            return;
        }
    } else if (type === 'events') {
        item.title = document.getElementById('edit-evt-title').value.trim();
        item.date = document.getElementById('edit-evt-date').value;
        item.time = document.getElementById('edit-evt-time').value;
        item.type = document.getElementById('edit-evt-type').value;
        item.notes = document.getElementById('edit-evt-notes').value.trim();
        if (!item.title || !item.date) {
            alert('イベント名と日付を入力してください。');
            return;
        }
    } else if (type === 'expenses') {
        item.title = document.getElementById('edit-exp-title').value.trim();
        item.amount = parseInt(document.getElementById('edit-exp-amount').value) || 0;
        item.category = document.getElementById('edit-exp-category').value;
        item.payer = document.getElementById('edit-exp-payer').value;
        item.date = document.getElementById('edit-exp-date').value;
        item.merchant = document.getElementById('edit-exp-merchant').value.trim() || 'その他店舗';
        item.receipt = document.getElementById('edit-exp-receipt').value;
        if (!item.title || item.amount <= 0 || !item.date) {
            alert('正しい金額と支払日を入力してください。');
            return;
        }
    } else if (type === 'incomes') {
        item.title = document.getElementById('edit-inc-title').value.trim();
        item.amount = parseInt(document.getElementById('edit-inc-amount').value) || 0;
        item.category = document.getElementById('edit-inc-category').value;
        item.receiver = document.getElementById('edit-inc-receiver').value;
        item.date = document.getElementById('edit-inc-date').value;
        item.client = document.getElementById('edit-inc-client').value.trim() || 'その他顧客';
        item.status = document.getElementById('edit-inc-status').value;
        if (!item.title || item.amount <= 0 || !item.date) {
            alert('正しい金額と入金日を入力してください。');
            return;
        }
        // 売上目標と動的に自動同期
        if (item.category === 'sales') {
            syncSalesGoals();
        }
    } else if (type === 'ideas') {
        item.title = document.getElementById('edit-idea-title').value.trim();
        item.desc = document.getElementById('edit-idea-desc').value.trim();
        item.color = document.querySelector('input[name="edit-idea-color"]:checked').value;
        if (!item.title || !item.desc) {
            alert('タイトルと詳細を入力してください。');
            return;
        }
    } else if (type === 'decisions') {
        item.title = document.getElementById('edit-dec-title').value.trim();
        item.reason = document.getElementById('edit-dec-reason').value.trim();
        item.date = document.getElementById('edit-dec-date').value;
        if (!item.title || !item.reason || !item.date) {
            alert('すべてのフィールドを入力してください。');
            return;
        }
    } else if (type === 'updates') {
        item.date = document.getElementById('edit-upd-date').value;
        item.done = document.getElementById('edit-upd-done').value.trim();
        item.todo = document.getElementById('edit-upd-todo').value.trim();
        if (!item.date || !item.done || !item.todo) {
            alert('すべての項目を入力してください。');
            return;
        }
    } else if (type === 'customers') {
        item.name = document.getElementById('edit-cust-name').value.trim();
        item.age = document.getElementById('edit-cust-age').value;
        item.country = document.getElementById('edit-cust-country').value.trim();
        item.plan = document.getElementById('edit-cust-plan').value;
        item.duration = document.getElementById('edit-cust-duration').value;
        item.amount = parseInt(document.getElementById('edit-cust-amount').value) || 0;
        item.date = document.getElementById('edit-cust-date').value;
        item.memo = document.getElementById('edit-cust-memo').value.trim();

        // ヒアリングシートの更新
        item.hearDestination = document.getElementById('edit-cust-hear-destination').value.trim();
        item.hearBudget = document.getElementById('edit-cust-hear-budget').value;
        item.hearPace = document.getElementById('edit-cust-hear-pace').value;
        item.hearReqAllergy = document.getElementById('edit-cust-hear-req-allergy').checked;
        item.hearReqFamily = document.getElementById('edit-cust-hear-req-family').checked;

        if (!item.name || item.amount <= 0 || !item.date) {
            alert('すべての必要事項を入力してください。');
            return;
        }

        // 【自動財務連動更新】マネーマネージャー側の収入履歴も全自動で連動更新！
        if (!state.incomes) state.incomes = [];
        const associatedIncome = state.incomes.find(inc => inc.refCrmCustomerId === item.id || inc.id === 'inc_crm_' + item.id);
        if (associatedIncome) {
            associatedIncome.title = `【売上】${item.name} 様 (${item.plan}/${item.duration})`;
            associatedIncome.amount = item.amount;
            associatedIncome.date = item.date;
            associatedIncome.client = flagDisplayCountryName(item.country) + '顧客';
        } else {
            // 万が一連動収入レコードが消失していた場合は自動で再生成して整合性を保護
            const newIncome = {
                id: 'inc_crm_' + item.id,
                title: `【売上】${item.name} 様 (${item.plan}/${item.duration})`,
                amount: item.amount,
                category: 'sales',
                receiver: 'common',
                date: item.date,
                client: flagDisplayCountryName(item.country) + '顧客',
                status: 'received',
                refCrmCustomerId: item.id
            };
            state.incomes.push(newIncome);
        }
    }

    saveState();
    
    // 変更履歴への自動記帳
    const typeLabelMap = {
        phases: '🚀 ロードマップフェーズ',
        goals: '🎯 目標・マイルストーン',
        events: '📅 カレンダー予定',
        expenses: '💸 経費・支出データ',
        incomes: '💵 収入・自己資金データ',
        ideas: '💡 アイデア付箋',
        decisions: '🤝 共同経営合意ログ',
        updates: '📝 進捗日報・報告',
        customers: '💰 顧客情報および売上'
    };
    const label = typeLabelMap[type] || '登録データ';
    const nameOrTitle = item.title || item.name || '項目';
    recordChangelogAuto('✏️ 登録データの編集更新', `${label}「${nameOrTitle}」の登録情報を変更・更新しました。`);

    closeModal('modal-edit-item');
    showToast('変更内容を保存し、同期しました');

    // 現在アクティブなタブを安全に再描画
    const activeTabEl = document.querySelector('.nav-item.active');
    const activeTab = activeTabEl ? activeTabEl.getAttribute('data-tab') : 'dashboard';
    switchTabQuietly(activeTab);
}

// ==========================================
// 16. 初期化処理 (Initialization)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initStore();
    initModals();
    
    // イベントバインディング
    applyDynamicNames();
    initMemoEvents();
    initTaskEvents();
    initNotificationEvents();
    initQuickChatEvents();
    initAIChatEvents();
    initCardChatEvents();
    initAIChatTabEvents();
    
    // 設定
    document.getElementById('btn-settings').addEventListener('click', () => {
        loadSettings();
        renderRecoveryCenter(); // 設定画面が開いた際にデータ保護履歴を描画！
        openModal('modal-settings');
    });
    document.getElementById('btn-save-settings').addEventListener('click', saveSettings);
    
    // インポート/エクスポート
    const exportBtn = document.getElementById('btn-export');
    if (exportBtn) exportBtn.addEventListener('click', exportData);
    
    const importBtn = document.getElementById('btn-import');
    if (importBtn) importBtn.addEventListener('click', triggerImport);
    
    const importFile = document.getElementById('import-file');
    if (importFile) importFile.addEventListener('change', handleImport);
    
    const resetBtn = document.getElementById('btn-reset-data');
    if (resetBtn) {
        resetBtn.addEventListener('click', (e) => {
            resetState(e);
        });
    }
    
    const submitResetBtn = document.getElementById('btn-submit-reset-data');
    if (submitResetBtn) {
        submitResetBtn.addEventListener('click', (e) => {
            executeResetState(e);
        });
    }

    // ロードマップ
    document.getElementById('btn-add-phase').addEventListener('click', () => openModal('modal-add-phase'));
    document.getElementById('btn-submit-phase').addEventListener('click', addPhase);

    // 目標
    document.getElementById('btn-add-goal').addEventListener('click', () => {
        document.getElementById('goal-deadline').value = new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0]; // デフォルト1ヶ月後
        openModal('modal-add-goal');
    });
    document.getElementById('btn-submit-goal').addEventListener('click', addGoal);

    // 憲章
    document.getElementById('btn-save-agreement').addEventListener('click', saveAgreementData);
    document.getElementById('btn-sig-pA').addEventListener('click', () => toggleSignature('pA'));
    document.getElementById('btn-sig-pB').addEventListener('click', () => toggleSignature('pB'));

    // カレンダー
    document.getElementById('btn-prev-month').addEventListener('click', prevMonth);
    document.getElementById('btn-next-month').addEventListener('click', nextMonth);
    document.getElementById('btn-add-event').addEventListener('click', () => {
        document.getElementById('evt-date').value = new Date().toISOString().split('T')[0];
        openModal('modal-add-event');
    });
    document.getElementById('btn-submit-event').addEventListener('click', addEvent);

    // 経費
    document.getElementById('form-add-expense').addEventListener('submit', handleAddExpense);
    document.getElementById('btn-clear-settlement').addEventListener('click', clearSettlement);
    document.getElementById('exp-date').value = new Date().toISOString().split('T')[0];

    // 収入
    const formAddInc = document.getElementById('form-add-income');
    if (formAddInc) formAddInc.addEventListener('submit', handleAddIncome);
    const incDateEl = document.getElementById('inc-date');
    if (incDateEl) incDateEl.value = new Date().toISOString().split('T')[0];

    // アイディア
    document.getElementById('btn-add-idea').addEventListener('click', () => openModal('modal-add-idea'));
    document.getElementById('btn-submit-idea').addEventListener('click', addIdea);
    
    // アイディアのカラーピッカーのインタラクション
    document.querySelectorAll('.color-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.color-opt').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            opt.querySelector('input').checked = true;
        });
    });

    // 意思決定
    document.getElementById('btn-add-decision').addEventListener('click', () => {
        document.getElementById('dec-date').value = new Date().toISOString().split('T')[0];
        openModal('modal-add-decision');
    });
    document.getElementById('btn-submit-decision').addEventListener('click', addDecision);

    // 進捗共有
    const formAddUpd = document.getElementById('form-add-update');
    if (formAddUpd) formAddUpd.addEventListener('submit', handleAddUpdate);
    const updDateEl = document.getElementById('upd-date');
    if (updDateEl) updDateEl.value = new Date().toISOString().split('T')[0];

    // タブナビゲーション
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = item.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // 創業憲章内のスクロール追従ナビゲーション
    const agNavItems = document.querySelectorAll('.ag-nav-item');
    agNavItems.forEach(nav => {
        nav.addEventListener('click', (e) => {
            e.preventDefault();
            agNavItems.forEach(n => n.classList.remove('active'));
            nav.classList.add('active');
            
            const targetId = nav.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ==========================================
    // 👥 顧客＆売上管理 (CRM) のイベント紐付け
    // ==========================================
    const addCustModalBtn = document.getElementById('btn-add-customer-modal');
    if (addCustModalBtn) {
        addCustModalBtn.addEventListener('click', () => {
            // 入力リセット
            document.getElementById('cust-name').value = '';
            document.getElementById('cust-memo').value = '';
            document.getElementById('cust-date').value = new Date().toISOString().split('T')[0];
            document.getElementById('cust-plan').value = 'スタンダード';
            document.getElementById('cust-duration').value = '1週間';
            document.getElementById('cust-age').value = '20代';
            document.getElementById('cust-country').value = '日本';
            document.getElementById('cust-country-other-group').style.display = 'none';
            document.getElementById('cust-country-other').value = '';
            
            // 金額初期計算
            calculateCrmAmount();
            
            openModal('modal-add-customer');
        });
    }

    const custCountrySelect = document.getElementById('cust-country');
    if (custCountrySelect) {
        custCountrySelect.addEventListener('change', () => {
            const otherGroup = document.getElementById('cust-country-other-group');
            if (custCountrySelect.value === 'その他') {
                otherGroup.style.display = 'block';
            } else {
                otherGroup.style.display = 'none';
            }
        });
    }

    // プラン・期間が変更されたら売上金額を自動更新
    const custPlanSelect = document.getElementById('cust-plan');
    const custDurationSelect = document.getElementById('cust-duration');
    if (custPlanSelect) custPlanSelect.addEventListener('change', calculateCrmAmount);
    if (custDurationSelect) custDurationSelect.addEventListener('change', calculateCrmAmount);

    const submitCustomerBtn = document.getElementById('btn-submit-customer');
    if (submitCustomerBtn) {
        submitCustomerBtn.addEventListener('click', addCustomer);
    }

    const crmSearchInput = document.getElementById('crm-search');
    if (crmSearchInput) {
        crmSearchInput.addEventListener('input', renderCRM);
    }

    // ==========================================
    // ⏳ 変更履歴 (Changelog) のイベント紐付け
    // ==========================================
    const changelogBtn = document.getElementById('btn-changelog');
    if (changelogBtn) {
        changelogBtn.addEventListener('click', () => {
            // 追加フォーム初期リセット
            const dateInput = document.getElementById('changelog-input-date');
            if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
            const titleInput = document.getElementById('changelog-input-title');
            if (titleInput) titleInput.value = '';
            const contentInput = document.getElementById('changelog-input-content');
            if (contentInput) contentInput.value = '';
            
            // アコーディオンを閉じた状態にする
            const detailsEl = document.querySelector('#modal-changelog details');
            if (detailsEl) detailsEl.removeAttribute('open');
            
            renderChangelogs();
            openModal('modal-changelog');
        });
    }

    const submitChangelogBtn = document.getElementById('btn-submit-changelog');
    if (submitChangelogBtn) {
        submitChangelogBtn.addEventListener('click', addChangelog);
    }

    // 最初のタブの読み込み
    switchTab('dashboard');
});

// ==========================================
// 17. 顧客＆売上管理 (CRM) コアロジック
// ==========================================
function calculateCrmAmount() {
    const plan = document.getElementById('cust-plan').value;
    const duration = document.getElementById('cust-duration').value;
    const amountInput = document.getElementById('cust-amount');
    
    // 料金テーブル設計 (9つの料金パターン)
    // スタンダード: 1週間=1980円, 2週間=2480円, 1ヶ月=2980円
    // プロ: 1週間=2980円, 2週間=3480円, 1ヶ月=3980円
    // プレミアム: 1週間=3980円, 2週間=4480円, 1ヶ月=4980円
    let base = 1980;
    if (plan === 'プロ') base = 2980;
    if (plan === 'プレミアム') base = 3980;
    
    let add = 0;
    if (duration === '2週間') add = 500;
    if (duration === '1ヶ月') add = 1000;
    
    amountInput.value = base + add;
}

function renderCRM() {
    const searchQuery = (document.getElementById('crm-search')?.value || '').toLowerCase().trim();
    
    // カンバンのカラム定義
    const statuses = ['lead', 'contacted', 'waiting', 'proposal', 'won'];
    
    // カラムの全初期化
    statuses.forEach(status => {
        const container = document.getElementById(`cards-${status}`);
        if (container) container.innerHTML = '';
    });
    
    let totalCustomers = 0;
    let totalSales = 0;
    
    // 国籍に応じたフラグ絵文字の自動判別用マップ
    const countryFlags = {
        '日本': '🇯🇵 日本',
        'アメリカ': '🇺🇸 アメリカ',
        'イギリス': '🇬🇧 イギリス',
        'フランス': '🇫🇷 フランス',
        'ドイツ': '🇩🇪 ドイツ',
        'イタリア': '🇮🇹 イタリア',
        'オーストラリア': '🇦🇺 オーストラリア',
        '台湾': '🇹🇼 台湾',
        '韓国': '🇰🇷 韓国',
        '中国': '🇨🇳 中国',
        '香港': '🇭🇰 香港',
        'タイ': '🇹🇭 タイ'
    };

    // 分析用データ集計
    const planCounts = { 'スタンダード': 0, 'プロ': 0, 'プレミアム': 0 };
    const planSales = { 'スタンダード': 0, 'プロ': 0, 'プレミアム': 0 };
    const countryCounts = {};

    const customers = state.customers || [];

    // 全体の集計
    customers.forEach(c => {
        totalCustomers++;
        totalSales += Number(c.amount) || 0;
        
        // プラン集計
        if (c.plan in planCounts) {
            planCounts[c.plan]++;
            planSales[c.plan] += Number(c.amount) || 0;
        }
        
        // 国籍集計
        countryCounts[c.country] = (countryCounts[c.country] || 0) + 1;
        
        // 進捗未定義の場合はデフォルトでleadに設定
        if (!c.status || !statuses.includes(c.status)) {
            c.status = 'lead';
        }
    });

    // 検索フィルタ適用
    const filteredCustomers = customers.filter(c => {
        const nameMatch = c.name.toLowerCase().includes(searchQuery);
        const countryMatch = (c.country || '').toLowerCase().includes(searchQuery);
        const planMatch = (c.plan || '').toLowerCase().includes(searchQuery);
        return nameMatch || countryMatch || planMatch;
    });

    const colCounts = { lead: 0, contacted: 0, waiting: 0, proposal: 0, won: 0 };

    // フィルタされた結果をカンバンボードに挿入
    filteredCustomers.forEach(c => {
        const status = c.status || 'lead';
        colCounts[status]++;
        
        const container = document.getElementById(`cards-${status}`);
        if (!container) return;
        
        // 国籍の表示整形
        let flagDisplay = c.country;
        if (c.country in countryFlags) {
            flagDisplay = countryFlags[c.country];
        } else {
            flagDisplay = `🏳️ ${c.country}`;
        }
        
        // プランクラス
        let planClass = 'standard';
        if (c.plan === 'プロ') planClass = 'pro';
        if (c.plan === 'プレミアム') planClass = 'premium';
        
        const card = document.createElement('div');
        card.className = 'kanban-card card';
        card.setAttribute('data-id', c.id);
        card.style.position = 'relative';
        card.style.cursor = 'grab';
        card.style.userSelect = 'none';
        card.style.touchAction = 'none'; // モバイルでのPointerEventsのスクロール干渉を防止
        
        // スレッドチャット未読数バッジ
        const cComments = (state.cardChats || []).filter(chat => chat.cardId === c.id);
        const commentsCount = cComments.length;
        const badgeNoti = commentsCount > 0 ? `<span class="badge-comment-count" style="position: absolute; top: -5px; right: -5px; background: var(--color-pink); color: white; border-radius: 50%; width: 18px; height: 18px; font-size: 10px; font-weight: 700; display: flex; align-items: center; justify-content: center; animation: pulse 2s infinite; z-index: 10;">${commentsCount}</span>` : '';
        
        const updatedAtStr = c.updatedAt ? new Date(c.updatedAt).toLocaleString([], {month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit'}) : (c.date || '日付未定');
        
        card.innerHTML = `
            ${badgeNoti}
            <div class="kanban-card-main" style="padding: 10px; display: flex; flex-direction: column; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 4px;">
                    <span style="font-size: 13.5px; font-weight: 800; color: var(--text-main); line-height: 1.2;">${c.name} <span style="font-size: 10.5px; color: var(--text-muted); font-weight: 500;">(${c.age})</span></span>
                    <span class="kanban-card-badge ${planClass === 'standard' ? 'blue' : (planClass === 'pro' ? 'pink' : 'gold')}" style="padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: 700; text-transform: uppercase;">${c.plan}</span>
                </div>
                
                <div style="display: flex; flex-wrap: wrap; gap: 4px; align-items: center; font-size: 11px;">
                    <span class="badge-country" style="padding: 1px 4px; font-size: 9.5px; background: rgba(255,255,255,0.04); border-radius: 4px; border: 1px solid rgba(255,255,255,0.06); color: var(--text-secondary);">${flagDisplay}</span>
                    <span style="color: var(--text-muted); font-size: 10px;">(${c.duration})</span>
                </div>
                
                ${c.hearDestination ? `
                <div style="font-size: 10.5px; color: var(--text-secondary); background: rgba(0,0,0,0.12); padding: 5px 8px; border-radius: 4px; display: flex; align-items: center; gap: 4px;">
                    <i data-lucide="map-pin" style="width: 10px; height: 10px; color: var(--color-blue);"></i>
                    <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 160px;">目的: ${c.hearDestination}</span>
                </div>
                ` : ''}
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px; border-top: 1px dashed rgba(255,255,255,0.06); padding-top: 8px;">
                    <span style="font-size: 12.5px; font-weight: 800; color: var(--color-success);">¥${Number(c.amount || 0).toLocaleString()}</span>
                    <div style="display: flex; gap: 4px; align-items: center;">
                        <!-- 💬 Card Comment Icon -->
                        <button type="button" class="btn-icon-sm" onclick="event.stopPropagation(); openCardChatPanel('${c.id}', '${c.name}')" title="一言チャット" style="width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--text-muted);">
                            <i data-lucide="message-square" style="width: 11px; height: 11px;"></i>
                        </button>
                        <!-- ⚔️ plan pdf link (sword icon) -->
                        <a href="${c.fileUrl || '#'}" target="_blank" class="btn-icon-sm" title="提案プラン" style="width: 24px; height: 24px; border-radius: 50%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); display: inline-flex; align-items: center; justify-content: center; color: var(--color-pink); text-decoration: none;">
                            <i data-lucide="swords" style="width: 11px; height: 11px;"></i>
                        </a>
                        <button type="button" class="btn-icon-sm edit" onclick="event.stopPropagation(); openEditModal('customers', '${c.id}')" title="編集" style="width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
                            <i data-lucide="edit-3" style="width: 11px; height: 11px;"></i>
                        </button>
                        <button type="button" class="btn-icon-sm delete" onclick="event.stopPropagation(); deleteCustomer('${c.id}')" title="削除" style="width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
                            <i data-lucide="trash-2" style="width: 11px; height: 11px;"></i>
                        </button>
                    </div>
                </div>
                
                <div style="font-size: 8px; color: var(--text-muted); text-align: right; margin-top: 2px;">
                    更新: ${updatedAtStr}
                </div>
            </div>
        `;
        
        container.appendChild(card);
        setupPointerDrag(card);
    });

    // カラムの件数表示更新
    statuses.forEach(status => {
        const countSpan = document.getElementById(`count-${status}`);
        if (countSpan) countSpan.textContent = colCounts[status];
    });

    // KPI更新
    const totalCustEl = document.getElementById('crm-total-customers');
    if (totalCustEl) totalCustEl.textContent = `${totalCustomers} 名`;
    
    const totalSalesEl = document.getElementById('crm-total-sales');
    if (totalSalesEl) totalSalesEl.textContent = `¥${totalSales.toLocaleString()}`;
    
    const arpu = totalCustomers > 0 ? Math.round(totalSales / totalCustomers) : 0;
    const arpuEl = document.getElementById('crm-arpu');
    if (arpuEl) arpuEl.textContent = `¥${arpu.toLocaleString()}`;

    // プラン別シェアの横棒グラフ描画
    const planBars = document.getElementById('crm-plan-bars');
    if (planBars) {
        planBars.innerHTML = '';
        const plans = ['スタンダード', 'プロ', 'プレミアム'];
        plans.forEach(p => {
            const count = planCounts[p] || 0;
            const sales = planSales[p] || 0;
            const pct = totalCustomers > 0 ? Math.round((count / totalCustomers) * 100) : 0;
            
            let barClass = 'standard';
            if (p === 'プロ') barClass = 'pro';
            if (p === 'プレミアム') barClass = 'premium';

            const container = document.createElement('div');
            container.className = 'crm-bar-container';
            container.innerHTML = `
                <div class="crm-bar-label">
                    <span>${p} プラン</span>
                    <span>${count}件 (¥${sales.toLocaleString()}) - ${pct}%</span>
                </div>
                <div class="crm-bar-bg">
                    <div class="crm-bar-fill ${barClass}" style="width: ${pct}%"></div>
                </div>
            `;
            planBars.appendChild(container);
        });
    }

    // 国籍別インバウンド比率の描画
    const countryBars = document.getElementById('crm-country-bars');
    if (countryBars) {
        countryBars.innerHTML = '';
        const sortedCountries = Object.entries(countryCounts)
            .sort((a, b) => b[1] - a[1]);
        
        if (sortedCountries.length > 0) {
            sortedCountries.slice(0, 4).forEach(([country, count]) => {
                const pct = totalCustomers > 0 ? Math.round((count / totalCustomers) * 100) : 0;
                
                let flagDisplay = country;
                if (country in countryFlags) {
                    flagDisplay = countryFlags[country];
                } else {
                    flagDisplay = `🏳️ ${country}`;
                }

                const container = document.createElement('div');
                container.className = 'crm-bar-container';
                container.innerHTML = `
                    <div class="crm-bar-label" style="font-size: 12px;">
                        <span>${flagDisplay}</span>
                        <span>${count}名 (${pct}%)</span>
                    </div>
                    <div class="crm-bar-bg" style="height: 8px;">
                        <div class="crm-bar-fill other" style="width: ${pct}%"></div>
                    </div>
                `;
                countryBars.appendChild(container);
            });
        } else {
            countryBars.innerHTML = '<p style="color: var(--text-muted); font-size: 13px; text-align: center; padding: 12px 0;">データなし</p>';
        }
    }

    // LPアクセス・マーケティング分析ダッシュボードを再描画
    renderLPAnalytics();

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ⚔️ カンバンカードのPointer Eventsドラッグ＆ドロップ実装
function setupPointerDrag(card) {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let offsetX = 0;
    let offsetY = 0;
    let initialParent = null;
    let placeholder = null;
    let rect = null;
    
    card.addEventListener('pointerdown', function(e) {
        // ボタンやインプット、リンクのクリック時はドラッグをトリガーしない
        if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input') || e.target.closest('.badge-comment-count')) {
            return;
        }
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        
        rect = card.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        
        initialParent = card.parentElement;
        
        // プレースホルダーの生成
        placeholder = document.createElement('div');
        placeholder.style.width = rect.width + 'px';
        placeholder.style.height = rect.height + 'px';
        placeholder.style.background = 'rgba(255, 255, 255, 0.02)';
        placeholder.style.border = '2px dashed rgba(255, 255, 255, 0.12)';
        placeholder.style.borderRadius = 'var(--border-radius-md)';
        placeholder.style.margin = getComputedStyle(card).margin;
        
        // フワッと浮かび上がる極上グローエフェクト適用
        card.style.width = rect.width + 'px';
        card.style.height = rect.height + 'px';
        card.style.position = 'fixed';
        card.style.left = rect.left + 'px';
        card.style.top = rect.top + 'px';
        card.style.zIndex = '9999';
        card.style.pointerEvents = 'none';
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(236, 72, 153, 0.35)';
        card.style.cursor = 'grabbing';
        card.style.transition = 'none'; // ドラッグ中はアニメーションをオフにして追従性を上げる
        
        initialParent.insertBefore(placeholder, card);
        card.setPointerCapture(e.pointerId);
    });
    
    card.addEventListener('pointermove', function(e) {
        if (!isDragging) return;
        
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        
        card.style.left = x + 'px';
        card.style.top = y + 'px';
        
        // ホバー中の列をハイライト
        const columns = document.querySelectorAll('.kanban-column');
        columns.forEach(col => {
            col.style.background = 'rgba(255, 255, 255, 0.02)';
            col.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        });
        
        const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
        const targetCol = hoveredElement?.closest('.kanban-column');
        if (targetCol) {
            targetCol.style.background = 'rgba(236, 72, 153, 0.04)';
            targetCol.style.borderColor = 'rgba(236, 72, 153, 0.2)';
        }
    });
    
    card.addEventListener('pointerup', function(e) {
        if (!isDragging) return;
        isDragging = false;
        
        card.releasePointerCapture(e.pointerId);
        
        // スタイルリセット
        card.style.width = '';
        card.style.height = '';
        card.style.position = '';
        card.style.left = '';
        card.style.top = '';
        card.style.zIndex = '';
        card.style.pointerEvents = '';
        card.style.transform = '';
        card.style.boxShadow = '';
        card.style.cursor = 'grab';
        card.style.transition = 'transform 0.2s, box-shadow 0.2s';
        
        const columns = document.querySelectorAll('.kanban-column');
        columns.forEach(col => {
            col.style.background = 'rgba(255, 255, 255, 0.02)';
            col.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        });
        
        const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
        const targetCol = hoveredElement?.closest('.kanban-column');
        
        if (placeholder && placeholder.parentElement) {
            placeholder.remove();
        }
        
        if (targetCol) {
            const newStatus = targetCol.getAttribute('data-status');
            const cardId = card.getAttribute('data-id');
            
            const customer = state.customers.find(c => c.id === cardId);
            if (customer && customer.status !== newStatus) {
                const oldStatus = customer.status || 'lead';
                customer.status = newStatus;
                customer.updatedAt = Date.now();
                
                saveState();
                
                const statusNames = {
                    lead: '未アプローチ',
                    contacted: 'DM送付済',
                    waiting: '返信待ち/商談中',
                    proposal: 'プラン提案中',
                    won: '成約！🎉'
                };
                recordChangelogAuto(
                    '⚔️ アプローチ進捗の更新',
                    `顧客「${customer.name}」様の状況を「${statusNames[oldStatus]}」から「${statusNames[newStatus]}」へ変更しました。`
                );
                
                showToast(`「${customer.name}」を進捗「${statusNames[newStatus]}」へ移動しました！`);
            }
        }
        
        renderCRM();
    });
    
    card.addEventListener('pointercancel', function(e) {
        if (!isDragging) return;
        isDragging = false;
        
        card.releasePointerCapture(e.pointerId);
        
        card.style.width = '';
        card.style.height = '';
        card.style.position = '';
        card.style.left = '';
        card.style.top = '';
        card.style.zIndex = '';
        card.style.pointerEvents = '';
        card.style.transform = '';
        card.style.boxShadow = '';
        card.style.cursor = 'grab';
        
        if (placeholder && placeholder.parentElement) {
            placeholder.remove();
        }
        
        renderCRM();
    });
}

function addCustomer() {
    const name = document.getElementById('cust-name').value.trim();
    const age = document.getElementById('cust-age').value;
    
    let country = document.getElementById('cust-country').value;
    if (country === 'その他') {
        country = document.getElementById('cust-country-other').value.trim() || 'その他';
    }
    
    const plan = document.getElementById('cust-plan').value;
    const duration = document.getElementById('cust-duration').value;
    const amount = parseInt(document.getElementById('cust-amount').value) || 0;
    const date = document.getElementById('cust-date').value;
    const memo = document.getElementById('cust-memo').value.trim();

    // ヒアリングシート情報
    const hearDestination = document.getElementById('cust-hear-destination').value.trim();
    const hearBudget = document.getElementById('cust-hear-budget').value;
    const hearPace = document.getElementById('cust-hear-pace').value;
    const hearReqAllergy = document.getElementById('cust-hear-req-allergy').checked;
    const hearReqFamily = document.getElementById('cust-hear-req-family').checked;

    if (!name || amount <= 0 || !date) {
        alert('名前、金額、購入日を正しく入力してください。');
        return;
    }

    const newCustomer = {
        id: 'cust_' + Date.now(),
        name: name,
        age: age,
        country: country,
        plan: plan,
        duration: duration,
        amount: amount,
        date: date,
        memo: memo,
        hearDestination: hearDestination,
        hearBudget: hearBudget,
        hearPace: hearPace,
        hearReqAllergy: hearReqAllergy,
        hearReqFamily: hearReqFamily,
        status: 'lead',
        updatedAt: Date.now()
    };

    if (!state.customers) state.customers = [];
    state.customers.push(newCustomer);

    // 【自動連動】マネーマネージャー（財務）の収入履歴へ全自動で売上を登録！
    if (!state.incomes) state.incomes = [];
    
    const incomeItem = {
        id: 'inc_crm_' + newCustomer.id, // CRM顧客と1対1で強固に紐付くID
        title: `【売上】${newCustomer.name} 様 (${newCustomer.plan}/${newCustomer.duration})`,
        amount: newCustomer.amount,
        category: 'sales',
        receiver: 'common',
        date: newCustomer.date,
        client: flagDisplayCountryName(newCustomer.country) + '顧客',
        status: 'received',
        refCrmCustomerId: newCustomer.id // 連動キー
    };

    state.incomes.push(incomeItem);

    saveState();
    
    // 変更履歴への自動記帳
    recordChangelogAuto('💰 顧客登録＆売上発生', `顧客「${newCustomer.name}」様(${flagDisplayCountryName(newCustomer.country)}) を新規登録し、売上 ¥${newCustomer.amount.toLocaleString()} が財務売上へ自動記帳されました。 (プラン: ${newCustomer.plan} / ${newCustomer.duration})`);

    closeModal('modal-add-customer');
    renderCRM();
    
    showToast(`顧客「${newCustomer.name}」を登録し、売上 ¥${newCustomer.amount.toLocaleString()} を財務に自動反映しました！`);
}

// 国籍名にフラグをくっつけるシンプルなヘルパー
function flagDisplayCountryName(name) {
    const flags = { 
        '日本': '🇯🇵 日本', 
        'アメリカ': '🇺🇸 アメリカ', 
        'イギリス': '🇬🇧 イギリス', 
        'フランス': '🇫🇷 フランス', 
        'ドイツ': '🇩🇪 ドイツ', 
        'イタリア': '🇮🇹 イタリア', 
        'オーストラリア': '🇦🇺 オーストラリア',
        '台湾': '🇹🇼 台湾', 
        '韓国': '🇰🇷 韓国', 
        '中国': '🇨🇳 中国' 
    };
    return flags[name] || name;
}

function deleteCustomer(id) {
    const customer = state.customers.find(c => c.id === id);
    if (!customer) return;
    
    if (confirm(`本当に顧客「${customer.name}」のデータを削除しますか？\n(※この顧客に連動して登録された財務の売上収入も自動で削除されます。)`)) {
        state.customers = state.customers.filter(c => c.id !== id);
        
        // 【自動連動削除】連動する収入データを安全に全自動で削除！
        state.incomes = state.incomes.filter(inc => inc.refCrmCustomerId !== id);
        
        saveState();
        
        // 変更履歴への自動記帳
        recordChangelogAuto('🗑️ 顧客および売上の削除', `顧客「${customer.name}」様の登録情報と、連動する売上 ¥${customer.amount.toLocaleString()} の記録を削除しました。`);

        renderCRM();
        showToast(`顧客「${customer.name}」のデータと連動売上を削除しました`, 'danger');
    }
}

// HTMLのonclick属性から確実に呼び出せるよう、関数を明示的にグローバルスコープへエクスポート
window.deleteExpense = deleteExpense;
window.deleteIncome = deleteIncome;
window.deletePhase = deletePhase;
window.deleteGoal = deleteGoal;
window.deleteEvent = deleteEvent;
window.deleteIdea = deleteIdea;
window.deleteDecision = deleteDecision;
window.toggleIdeaLike = toggleIdeaLike;
window.adjustGoalProgress = adjustGoalProgress;
window.setGoalCompleted = setGoalCompleted;
window.togglePhaseCompleted = togglePhaseCompleted;
window.deleteUpdate = deleteUpdate;
window.openEditModal = openEditModal;
window.saveEditItem = saveEditItem;
window.deleteCustomer = deleteCustomer;

// ==========================================
// 18. システム変更・更新履歴 (Changelog) コアロジック
// ==========================================
function renderChangelogs() {
    const timeline = document.getElementById('changelog-timeline');
    if (!timeline) return;

    timeline.innerHTML = '';
    
    // システムリリース履歴とユーザー手動履歴をマージして、日付の新しい順にソートして表示
    if (!state.changelogs) state.changelogs = [];
    
    const allChangelogs = [...state.changelogs];
    allChangelogs.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (allChangelogs.length === 0) {
        timeline.innerHTML = '<p style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 20px 0;">まだ変更履歴が登録されていません。</p>';
        return;
    }

    allChangelogs.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'changelog-item';
        
        const isSystem = item.isSystem ? 'system' : '';
        const badgeText = item.isSystem ? '💻 システム更新' : '👥 共同経営ノート';
        
        // ユーザー追加分には削除ボタンを付与
        const deleteBtnHtml = !item.isSystem ? `
            <button onclick="deleteChangelog('${item.id}')" style="background: none; border: none; color: var(--color-pink); cursor: pointer; padding: 2px 6px; font-size: 11px; display: flex; align-items: center; gap: 2px; border-radius: 4px; transition: background 0.2s;" onmouseover="this.style.background='rgba(219,39,119,0.06)'" onmouseout="this.style.background='none'" title="この履歴を削除します">
                <i data-lucide="trash-2" style="width: 12px; height: 12px;"></i>削除
            </button>
        ` : '';

        itemEl.innerHTML = `
            <div class="changelog-dot ${isSystem}"></div>
            <div class="changelog-header">
                <span class="changelog-date-badge ${isSystem}">
                    ${item.date} &nbsp;•&nbsp; ${badgeText}
                </span>
                ${deleteBtnHtml}
            </div>
            <div class="changelog-title">${item.title}</div>
            <div class="changelog-content">${item.content}</div>
        `;
        
        timeline.appendChild(itemEl);
    });

    // 動的にアイコンをレンダリング（Lucideアイコンの適用）
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function addChangelog() {
    const dateInput = document.getElementById('changelog-input-date');
    const titleInput = document.getElementById('changelog-input-title');
    const contentInput = document.getElementById('changelog-input-content');

    if (!dateInput || !titleInput || !contentInput) return;

    const date = dateInput.value;
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!date || !title || !content) {
        alert('変更履歴の日付、タイトル、内容をすべて入力してください。');
        return;
    }

    if (!state.changelogs) state.changelogs = [];

    const newChangelog = {
        id: 'chg_' + Date.now(),
        date: date,
        title: title,
        content: content,
        isSystem: false // ユーザー手動追加
    };

    state.changelogs.push(newChangelog);
    saveState();
    
    // フォームリセット
    titleInput.value = '';
    contentInput.value = '';
    
    // アコーディオンを閉じる
    const detailsEl = document.querySelector('#modal-changelog details');
    if (detailsEl) detailsEl.removeAttribute('open');

    renderChangelogs();
    showToast('変更・更新履歴を登録しました！');
}

function deleteChangelog(id) {
    if (!state.changelogs) return;
    
    const item = state.changelogs.find(c => c.id === id);
    if (!item || item.isSystem) return; // システム公式履歴は削除不可

    if (confirm(`本当にこの変更履歴（「${item.title}」）を削除しますか？`)) {
        state.changelogs = state.changelogs.filter(c => c.id !== id);
        saveState();
        renderChangelogs();
        showToast('変更履歴を削除しました', 'danger');
    }
}

window.deleteChangelog = deleteChangelog;

// ==========================================
// 19. 自動変更・履歴記帳システム & 日付詳細ズーム
// ==========================================
function recordChangelogAuto(title, content) {
    if (!state.changelogs) state.changelogs = [];
    
    const newLog = {
        id: 'chg_auto_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        date: new Date().toISOString().split('T')[0],
        title: title,
        content: content,
        isSystem: false // 手動追加と同じなので削除可能
    };
    
    state.changelogs.push(newLog);
    saveState();
}

function openDayDetails(dateStr) {
    const listContainer = document.getElementById('day-details-events-list');
    const titleEl = document.getElementById('day-details-title');
    const addEventBtn = document.getElementById('btn-add-event-from-details');
    
    if (!listContainer || !titleEl) return;
    
    // 年月日の日本語整形
    const [y, m, d] = dateStr.split('-');
    const formattedDate = `${y}年${parseInt(m)}月${parseInt(d)}日`;
    titleEl.innerHTML = `<i data-lucide="calendar" class="text-primary" style="width: 20px; height: 20px;"></i> ${formattedDate} の予定・詳細`;
    
    listContainer.innerHTML = '';
    
    // その日のイベント抽出
    const dayEvents = state.events.filter(e => e.date === dateStr);
    
    if (dayEvents.length === 0) {
        listContainer.innerHTML = `
            <div style="text-align: center; padding: 24px 0; color: var(--text-muted); font-size: 13px;">
                <i data-lucide="calendar-range" style="width: 32px; height: 32px; margin-bottom: 8px; opacity: 0.5;"></i>
                <p style="margin: 0;">この日の登録予定はありません</p>
            </div>
        `;
    } else {
        dayEvents.forEach(evt => {
            const item = document.createElement('div');
            item.className = `upcoming-event-item ${evt.type}`;
            item.style.cssText = 'position: relative; padding: 12px; border-radius: var(--radius-md); border-left: 4px solid var(--color-primary); background: #f8fafc; margin-bottom: 8px;';
            
            if (evt.type === 'meeting') item.style.borderLeftColor = 'var(--color-blue)';
            else if (evt.type === 'deadline') item.style.borderLeftColor = 'var(--color-pink)';
            else if (evt.type === 'milestone') item.style.borderLeftColor = 'var(--color-purple)';
            
            item.innerHTML = `
                <div style="font-size: 11px; font-weight: 700; color: var(--text-secondary); margin-bottom: 2px;">⏰ ${evt.time || '時間指定なし'}</div>
                <div style="font-size: 13.5px; font-weight: 700; color: #1e1b4b; margin-bottom: 4px;">${evt.title}</div>
                ${evt.notes ? `<div style="font-size: 11.5px; color: var(--text-muted); line-height: 1.4;">📝 ${evt.notes}</div>` : ''}
                <div style="position: absolute; right: 12px; top: 12px; display: flex; gap: 6px;">
                    <button type="button" class="btn-icon-sm edit" onclick="closeModal('modal-day-details'); openEditModal('events', '${evt.id}')" title="編集" style="width: 26px; height: 26px;">
                        <i data-lucide="edit-3" style="width: 13px; height: 13px;"></i>
                    </button>
                    <button type="button" class="btn-icon-sm delete" onclick="deleteDayEvent('${evt.id}', '${dateStr}')" title="削除" style="width: 26px; height: 26px;">
                        <i data-lucide="trash-2" style="width: 13px; height: 13px;"></i>
                    </button>
                </div>
            `;
            listContainer.appendChild(item);
        });
    }
    
    // イベント追加ボタンの連動
    addEventBtn.onclick = () => {
        closeModal('modal-day-details');
        document.getElementById('evt-date').value = dateStr;
        openModal('modal-add-event');
    };
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    openModal('modal-day-details');
}

function deleteDayEvent(id, dateStr) {
    const item = state.events.find(e => e.id === id);
    const title = item ? item.title : '予定';
    
    if (confirm(`本当に予定「${title}」を削除しますか？`)) {
        state.events = state.events.filter(e => e.id !== id);
        saveState();
        renderCalendar();
        
        // 変更履歴への自動記帳
        recordChangelogAuto('🗑️ 予定の削除', `予定「${title}」をカレンダーから削除しました。`);
        
        // 詳細ポップアップを再描画
        openDayDetails(dateStr);
        showToast(`予定「${title}」を削除しました`, 'danger');
    }
}

window.openDayDetails = openDayDetails;
window.deleteDayEvent = deleteDayEvent;

// ==========================================
// 19.5 プレミアム長押し並び替えロジック (Generic Long-Press Sortable)
// ==========================================
function initSortable(containerId, itemSelector, stateKey, renderFn) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (container.dataset.sortableInitialized === 'true') return;
    container.dataset.sortableInitialized = 'true';

    let longPressTimeout = null;
    let draggedElement = null;
    let startX = 0;
    let startY = 0;
    let isDragging = false;

    container.addEventListener('pointerdown', (e) => {
        if (e.button !== 0) return;

        const item = e.target.closest(itemSelector);
        if (!item) return;

        if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input') || e.target.closest('select') || e.target.closest('textarea')) {
            return;
        }

        draggedElement = item;
        startX = e.clientX;
        startY = e.clientY;
        isDragging = false;

        longPressTimeout = setTimeout(() => {
            isDragging = true;
            draggedElement.classList.add('sortable-dragging');
            try {
                draggedElement.setPointerCapture(e.pointerId);
            } catch (err) {}
        }, 300);
    });

    container.addEventListener('pointermove', (e) => {
        if (!draggedElement) return;

        if (!isDragging) {
            const dist = Math.sqrt(Math.pow(e.clientX - startX, 2) + Math.pow(e.clientY - startY, 2));
            if (dist > 6) {
                clearTimeout(longPressTimeout);
            }
            return;
        }

        const overElement = document.elementFromPoint(e.clientX, e.clientY);
        if (!overElement) return;

        const overItem = overElement.closest(itemSelector);
        if (overItem && overItem !== draggedElement && overItem.parentNode === container) {
            const children = Array.from(container.children);
            const draggedIdx = children.indexOf(draggedElement);
            const overIdx = children.indexOf(overItem);

            if (draggedIdx < overIdx) {
                container.insertBefore(draggedElement, overItem.nextSibling);
            } else {
                container.insertBefore(draggedElement, overItem);
            }
        }
    });

    const endDrag = (e) => {
        clearTimeout(longPressTimeout);

        if (draggedElement) {
            if (isDragging) {
                draggedElement.classList.remove('sortable-dragging');
                try {
                    draggedElement.releasePointerCapture(e.pointerId);
                } catch (err) {}

                const children = Array.from(container.children);
                const newIds = children
                    .map(el => el.getAttribute('data-memo-id') || el.getAttribute('data-idea-id'))
                    .filter(Boolean);

                if (newIds.length > 0 && state[stateKey]) {
                    const existingList = state[stateKey];
                    const sortedList = [];
                    
                    newIds.forEach(id => {
                        const item = existingList.find(x => x && x.id === id);
                        if (item) sortedList.push(item);
                    });
                    
                    existingList.forEach(item => {
                        if (item && !newIds.includes(item.id)) {
                            sortedList.push(item);
                        }
                    });

                    state[stateKey] = sortedList;
                    saveState();
                    showToast('並び順を保存しました！');
                }

                if (typeof renderFn === 'function') {
                    renderFn();
                }
            }
            draggedElement = null;
        }
        isDragging = false;
    };

    container.addEventListener('pointerup', endDrag);
    container.addEventListener('pointercancel', endDrag);
}

// ==========================================
// 20. 共通認識スペース (Shared Memos Space)
// ==========================================
let currentMemoFilter = 'all';

function renderMemos() {
    const gridContainer = document.getElementById('memos-grid-container');
    const searchInput = document.getElementById('memo-search-input');
    if (!gridContainer) return;

    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
    gridContainer.innerHTML = '';

    if (!state.sharedMemos || !Array.isArray(state.sharedMemos)) {
        state.sharedMemos = [];
    }

    // フィルタリング処理
    let filtered = state.sharedMemos;
    if (currentMemoFilter !== 'all') {
        filtered = filtered.filter(m => m && m.category === currentMemoFilter);
    }
    if (searchQuery !== '') {
        filtered = filtered.filter(m => {
            if (!m) return false;
            const title = m.title || '';
            const content = m.content || '';
            return title.toLowerCase().includes(searchQuery) || 
                   content.toLowerCase().includes(searchQuery);
        });
    }

    if (filtered.length === 0) {
        gridContainer.innerHTML = `
            <div class="empty-memos-state">
                <i data-lucide="sticky-note"></i>
                <p>${searchQuery || currentMemoFilter !== 'all' ? '該当するメモはありません' : '登録されたメモはありません。業務ルールやDMテンプレート、共有事項を書き込んでみましょう！'}</p>
            </div>
        `;
    } else {
        filtered.forEach(m => {
            if (!m) return;
            const card = document.createElement('div');
            card.className = `memo-card ${m.category || 'other'}`;
            card.setAttribute('data-memo-id', m.id);
            
            // カテゴリの日本語表示
            let catName = 'その他';
            if (m.category === 'rule') catName = '業務ルール';
            else if (m.category === 'customer') catName = '顧客対応';
            else if (m.category === 'marketing') catName = 'マーケティング';

            // 更新者のアバター・名前
            const authorName = m.lastUpdatedBy === 'partnerA' ? state.settings.partnerAName : state.settings.partnerBName;
            const authorClass = m.lastUpdatedBy === 'partnerA' ? 'pA' : 'pB';

            // 本文中のプレースホルダー（[パートナー名]など）を動的に置換して表示（コピー時は原文のまま）
            let displayContent = m.content || '';
            if (typeof displayContent === 'string') {
                displayContent = displayContent.replace(/\[パートナー名\]/g, authorName || '');
                displayContent = displayContent.replace(/\[煌記\/和弥\]/g, authorName || '');
            }

            card.innerHTML = `
                <div class="memo-card-header">
                    <span class="memo-category-badge">${catName}</span>
                    <div class="memo-actions-btn-group" style="display: flex; gap: 4px; align-items: center;">
                        <!-- 💬 Card Comment Icon -->
                        ${(() => {
                            const mChats = (state.cardChats || []).filter(c => c.cardId === m.id);
                            const count = mChats.length;
                            return `
                                <button type="button" class="btn-memo-action comment" onclick="event.stopPropagation(); openCardChatPanel('${m.id}', '${(m.title || '').replace(/'/g, "\\'")}')" title="一言チャット" style="position: relative; color: ${count > 0 ? 'var(--color-pink)' : 'var(--text-muted)'};">
                                    <i data-lucide="message-square"></i>
                                    ${count > 0 ? `<span style="font-size: 7px; font-weight: bold; background: var(--color-pink); color: white; padding: 0px 3px; border-radius: 4px; position: absolute; top: -3px; right: -3px; z-index: 5;">${count}</span>` : ''}
                                </button>
                            `;
                        })()}
                        <button type="button" class="btn-memo-action copy" onclick="copyMemoContent('${m.id}', this)" title="本文をコピー">
                            <i data-lucide="copy"></i>
                        </button>
                        <button type="button" class="btn-memo-action edit" onclick="openEditMemo('${m.id}')" title="編集">
                            <i data-lucide="edit-3"></i>
                        </button>
                        <button type="button" class="btn-memo-action delete" onclick="deleteMemo('${m.id}')" title="削除">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                </div>
                <h4 onclick="openEditMemo('${m.id}')">${m.title || ''}</h4>
                <div class="memo-content-box">${displayContent}</div>
                ${m.fileUrl ? `
                <div class="memo-attachment-link" style="margin-top: 10px;">
                    <button type="button" class="btn btn-outline" onclick="openDocPreview('${m.fileUrl}', '${m.fileName || '添付資料'}')" style="padding: 6px 12px; font-size: 11.5px; border-color: rgba(79, 70, 229, 0.2); color: var(--color-primary); background-color: rgba(79, 70, 229, 0.02); display: inline-flex; align-items: center; gap: 6px; border-radius: var(--border-radius-sm); font-weight: 700; width: auto; cursor: pointer; text-decoration: none;">
                        <i data-lucide="file-text" style="width: 14px; height: 14px;"></i>
                        <span>${m.fileName || '添付資料・PDFを開く'}</span>
                        <i data-lucide="external-link" style="width: 12px; height: 12px;"></i>
                    </button>
                </div>
                ` : ''}
                <div class="memo-footer">
                    <div class="memo-meta-info">
                        更新: <span class="${authorClass}">${authorName || ''}</span> (${m.date || ''})
                    </div>
                </div>
            `;
            gridContainer.appendChild(card);
        });
    }

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 長押し並び替えイベントをアタッチ
    initSortable('memos-grid-container', '.memo-card', 'sharedMemos', renderMemos);
}

function handleAddOrEditMemo() {
    const editIdInput = document.getElementById('memo-edit-id');
    const titleInput = document.getElementById('memo-title');
    const categorySelect = document.getElementById('memo-category');
    const contentInput = document.getElementById('memo-content');
    const fileNameInput = document.getElementById('memo-file-name');
    const fileUrlInput = document.getElementById('memo-file-url');

    if (!titleInput || !categorySelect || !contentInput) return;

    const title = titleInput.value.trim();
    const category = categorySelect.value;
    const content = contentInput.value.trim();
    const fileName = fileNameInput ? fileNameInput.value.trim() : '';
    const fileUrl = fileUrlInput ? fileUrlInput.value.trim() : '';
    const editId = editIdInput ? editIdInput.value : '';

    if (!title || !content) {
        alert('タイトルと本文を入力してください。');
        return;
    }

    // モーダル内の更新者セレクトボックスより取得
    let currentAuthor = 'partnerA';
    const memoAuthEl = document.getElementById('memo-author');
    if (memoAuthEl) {
        currentAuthor = memoAuthEl.value;
    }

    if (!state.sharedMemos || !Array.isArray(state.sharedMemos)) {
        state.sharedMemos = [];
    }

    const dateStr = new Date().toISOString().split('T')[0];

    if (editId) {
        // 編集
        const memo = state.sharedMemos.find(m => m && m.id === editId);
        if (memo) {
            memo.title = title;
            memo.category = category;
            memo.content = content;
            memo.fileName = fileName;
            memo.fileUrl = fileUrl;
            memo.lastUpdatedBy = currentAuthor;
            memo.date = dateStr;
            memo.updatedAt = Date.now(); // タイムスタンプ付与！
            showToast('共有メモを更新しました！');
        }
    } else {
        // 新規登録
        const newMemo = {
            id: 'memo-' + Date.now(),
            title: title,
            category: category,
            content: content,
            fileName: fileName,
            fileUrl: fileUrl,
            lastUpdatedBy: currentAuthor,
            date: dateStr,
            updatedAt: Date.now() // タイムスタンプ付与！
        };
        state.sharedMemos.push(newMemo);
        showToast('新しいメモを登録しました！');
    }

    saveState();
    closeModal('modal-add-memo');

    // 新規作成・編集完了時はカテゴリフィルターを「すべて」に自動的に戻す
    currentMemoFilter = 'all';
    const chips = document.querySelectorAll('#memo-category-filters .filter-chip');
    chips.forEach(c => {
        if (c.getAttribute('data-category') === 'all') {
            c.classList.add('active');
        } else {
            c.classList.remove('active');
        }
    });

    renderMemos();
}

function deleteMemo(id) {
    if (!state.sharedMemos || !Array.isArray(state.sharedMemos)) {
        state.sharedMemos = [];
    }
    const memo = state.sharedMemos.find(m => m && m.id === id);
    if (!memo) return;

    if (confirm(`本当にメモ「${memo.title || ''}」を削除しますか？`)) {
        state.sharedMemos = state.sharedMemos.filter(m => m && m.id !== id);
        saveState();
        renderMemos();
        showToast('メモを削除しました', 'danger');
    }
}

function openEditMemo(id) {
    if (!state.sharedMemos || !Array.isArray(state.sharedMemos)) {
        state.sharedMemos = [];
    }
    const memo = state.sharedMemos.find(m => m && m.id === id);
    if (!memo) return;

    document.getElementById('memo-modal-title').textContent = '共有メモを編集';
    document.getElementById('memo-edit-id').value = memo.id;
    document.getElementById('memo-title').value = memo.title || '';
    document.getElementById('memo-category').value = memo.category || 'rule';
    document.getElementById('memo-content').value = memo.content || '';
    document.getElementById('memo-file-name').value = memo.fileName || '';
    document.getElementById('memo-file-url').value = memo.fileUrl || '';

    const memoAuthEl = document.getElementById('memo-author');
    if (memoAuthEl) {
        memoAuthEl.value = memo.lastUpdatedBy || 'partnerA';
    }

    openModal('modal-add-memo');
}

function copyMemoContent(id, buttonEl) {
    const memo = state.sharedMemos.find(m => m.id === id);
    if (!memo) return;

    // クリップボードへコピー
    // パートナー名プレースホルダーの動的置換も適用した状態でコピーさせます
    const authorName = memo.lastUpdatedBy === 'partnerA' ? state.settings.partnerAName : state.settings.partnerBName;
    let contentToCopy = memo.content;
    contentToCopy = contentToCopy.replace(/\[パートナー名\]/g, authorName);
    contentToCopy = contentToCopy.replace(/\[煌記\/和弥\]/g, authorName);

    navigator.clipboard.writeText(contentToCopy).then(() => {
        showToast('本文をクリップボードにコピーしました！');
        
        // コピー成功時のエフェクトアニメーション
        if (buttonEl) {
            buttonEl.classList.add('copy-success-animation');
            // アイコンを一時的にチェックマークに変える
            const icon = buttonEl.querySelector('i');
            if (icon) {
                icon.setAttribute('data-lucide', 'check');
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }
            setTimeout(() => {
                buttonEl.classList.remove('copy-success-animation');
                if (icon) {
                    icon.setAttribute('data-lucide', 'copy');
                    if (typeof lucide !== 'undefined') lucide.createIcons();
                }
            }, 1000);
        }
    }).catch(err => {
        console.error('Copy failed: ', err);
        alert('コピーに失敗しました。お手数ですが、テキストボックスより手動でコピーしてください。');
    });
}

function initMemoEvents() {
    // 共有メモ新規登録ボタン
    const addMemoBtn = document.getElementById('btn-add-memo-modal');
    if (addMemoBtn) {
        addMemoBtn.addEventListener('click', () => {
            document.getElementById('memo-modal-title').textContent = '共有メモを追加';
            document.getElementById('memo-edit-id').value = '';
            document.getElementById('memo-title').value = '';
            document.getElementById('memo-category').value = 'rule';
            document.getElementById('memo-content').value = '';
            document.getElementById('memo-file-name').value = '';
            document.getElementById('memo-file-url').value = '';

            const memoAuthEl = document.getElementById('memo-author');
            if (memoAuthEl) {
                // 日報の報告者を初期値にマッピング
                const updOptEl = document.getElementById('upd-author');
                memoAuthEl.value = updOptEl ? updOptEl.value : 'partnerA';
            }

            openModal('modal-add-memo');
        });
    }

    // 保存ボタン
    const submitMemoBtn = document.getElementById('btn-submit-memo');
    if (submitMemoBtn) {
        submitMemoBtn.addEventListener('click', handleAddOrEditMemo);
    }

    // 検索入力リスナー
    const searchInput = document.getElementById('memo-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', renderMemos);
    }

    // カテゴリフィルターチップリスナー
    const chips = document.querySelectorAll('#memo-category-filters .filter-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentMemoFilter = chip.getAttribute('data-category');
            renderMemos();
        });
    });
}

window.renderMemos = renderMemos;
window.deleteMemo = deleteMemo;
window.openEditMemo = openEditMemo;
window.copyMemoContent = copyMemoContent;

// ==========================================
// 17. 🆕 PDF・資料 アプリ内プレビュー機能
// ==========================================
function openDocPreview(url, title) {
    const modal = document.getElementById('modal-preview-doc');
    const iframe = document.getElementById('preview-doc-iframe');
    const fallback = document.getElementById('preview-doc-fallback');
    const fallbackBtn = document.getElementById('preview-doc-fallback-btn');
    const titleEl = document.getElementById('preview-doc-title');
    
    if (!modal || !iframe || !fallback || !fallbackBtn) return;
    
    titleEl.textContent = title || '資料プレビュー';
    
    // GoogleドライブやDropboxなどのiframe制限ドメインを検知してフォールバックを表示
    const isBlocked = url.includes('drive.google.com') || 
                      url.includes('docs.google.com') || 
                      url.includes('dropbox.com') || 
                      url.includes('box.com') ||
                      url.includes('onedrive.live.com');
    
    if (isBlocked) {
        iframe.style.display = 'none';
        fallback.style.display = 'flex';
        fallbackBtn.href = url;
        iframe.src = '';
    } else {
        iframe.style.display = 'block';
        fallback.style.display = 'none';
        iframe.src = url;
    }
    
    openModal('modal-preview-doc');
}
window.openDocPreview = openDocPreview;

// ==========================================
// 18. 🆕 割り勘清算用 PayPay送金QRコード生成
// ==========================================
function updatePayPayQR(pAPaid, pBPaid, pAShouldPay, pBShouldPay, pA, pB) {
    const qrContainer = document.getElementById('paypay-qr-container');
    const qrImageDiv = document.getElementById('paypay-qr-image');
    const qrDesc = document.getElementById('paypay-qr-desc');
    
    if (!qrContainer || !qrImageDiv || !qrDesc) return;
    
    let diff = 0;
    let payerName = '';
    let receiverName = '';
    
    if (pAPaid > pAShouldPay) {
        diff = Math.round(pAPaid - pAShouldPay);
        payerName = pB;
        receiverName = pA;
    } else if (pBPaid > pBShouldPay) {
        diff = Math.round(pBPaid - pBShouldPay);
        payerName = pA;
        receiverName = pB;
    }
    
    if (diff > 0) {
        qrContainer.style.display = 'flex';
        // PayPay送金用のメッセージを含めたQRコード用ペイロードテキスト
        const qrPayload = `PayPay送金清算\n金額: ¥${diff.toLocaleString()}\n受取人: ${receiverName}\n支払人: ${payerName}\nCo-Founder Hub 経費清算用`;
        
        // QRiousを使ってローカルでQRコードを動的生成
        qrImageDiv.innerHTML = '';
        const qrCanvas = document.createElement('canvas');
        qrCanvas.style.width = '120px';
        qrCanvas.style.height = '120px';
        qrCanvas.style.display = 'block';
        qrCanvas.style.margin = '0 auto';
        qrImageDiv.appendChild(qrCanvas);
        
        try {
            if (typeof QRious !== 'undefined') {
                new QRious({
                    element: qrCanvas,
                    value: qrPayload,
                    size: 150,
                    level: 'H',
                    background: '#ffffff',
                    foreground: '#0f172a'
                });
            } else {
                // QRiousがロードされていない場合のWeb APIフォールバック
                const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrPayload)}`;
                qrImageDiv.innerHTML = `<img src="${qrUrl}" alt="PayPay送金用QRコード" style="width: 120px; height: 120px; object-fit: contain; display: block; margin: 0 auto;">`;
            }
        } catch (e) {
            console.error("QR Code generation error:", e);
            const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrPayload)}`;
            qrImageDiv.innerHTML = `<img src="${qrUrl}" alt="PayPay送金用QRコード" style="width: 120px; height: 120px; object-fit: contain; display: block; margin: 0 auto;">`;
        }
        
        qrDesc.textContent = `送金金額: ¥${diff.toLocaleString()} (${payerName} → ${receiverName})`;
    } else {
        qrContainer.style.display = 'none';
    }
}
window.updatePayPayQR = updatePayPayQR;

// ==========================================
// 19. 🆕 タスク管理カンバンボード (Kanban Tasks)
// ==========================================
function renderTasks() {
    if (!state.tasks) state.tasks = [];
    
    const columns = {
        todo: { container: document.getElementById('cards-todo'), count: document.getElementById('count-todo'), items: [] },
        doing: { container: document.getElementById('cards-doing'), count: document.getElementById('count-doing'), items: [] },
        review: { container: document.getElementById('cards-review'), count: document.getElementById('count-review'), items: [] },
        done: { container: document.getElementById('cards-done'), count: document.getElementById('count-done'), items: [] }
    };
    
    // コンテナとカウントの初期クリア
    Object.keys(columns).forEach(status => {
        if (columns[status].container) {
            columns[status].container.innerHTML = '';
        }
    });
    
    // タスクの振り分け
    state.tasks.forEach(task => {
        if (columns[task.status]) {
            columns[task.status].items.push(task);
        }
    });
    
    // レンダリング処理
    Object.keys(columns).forEach(status => {
        const col = columns[status];
        if (col.count) {
            col.count.textContent = col.items.length;
        }
        
        if (!col.container) return;
        
        if (col.items.length === 0) {
            col.container.innerHTML = `
                <div style="text-align: center; color: var(--text-secondary); padding: 30px 10px; font-size: 11.5px; border: 1px dashed rgba(79, 70, 229, 0.15); border-radius: var(--border-radius-sm); background: rgba(255, 255, 255, 0.3); font-weight: 500;">
                    タスクはありません
                </div>
            `;
            return;
        }
        
        col.items.forEach(task => {
            const card = document.createElement('div');
            card.className = 'kanban-card';
            card.style.background = '#ffffff';
            card.style.border = '1px solid var(--border-color)';
            card.style.borderRadius = 'var(--border-radius-sm)';
            card.style.padding = '12px';
            card.style.boxShadow = '0 2px 4px rgba(15, 23, 42, 0.03)';
            card.style.display = 'flex';
            card.style.flexDirection = 'column';
            card.style.gap = '8px';
            card.style.position = 'relative';
            card.style.transition = 'transform 0.2s, box-shadow 0.2s';
            
            // 優先度バッジスタイル
            let prioColor = '#3b82f6';
            let prioText = '低';
            if (task.priority === 'high') {
                prioColor = 'var(--color-pink)';
                prioText = '高';
            } else if (task.priority === 'medium') {
                prioColor = '#f59e0b';
                prioText = '中';
            }
            
            // 担当者表記
            let assigneeName = '共同・ペア';
            let assigneeClass = 'both';
            if (task.assignee === 'partnerA') {
                assigneeName = state.settings.partnerAName;
                assigneeClass = 'pA';
            } else if (task.assignee === 'partnerB') {
                assigneeName = state.settings.partnerBName;
                assigneeClass = 'pB';
            }
            
            // 移動矢印コントローラーの構築
            let moveControlsHTML = '<div style="display: flex; gap: 4px; margin-top: 8px; border-top: 1px solid #f1f5f9; padding-top: 8px; justify-content: space-between; align-items: center;">';
            
            let leftStatus = '';
            if (status === 'doing') leftStatus = 'todo';
            else if (status === 'review') leftStatus = 'doing';
            else if (status === 'done') leftStatus = 'review';
            
            if (leftStatus) {
                moveControlsHTML += `<button type="button" class="btn btn-outline" style="padding: 2px 6px; font-size: 10px; height: 22px; cursor: pointer; border-radius: 4px; display: inline-flex; align-items: center;" onclick="moveTaskStatus('${task.id}', '${leftStatus}')"><i data-lucide="arrow-left" style="width: 10px; height: 10px;"></i></button>`;
            } else {
                moveControlsHTML += `<div></div>`;
            }
            
            // タスク用のコメント件数算出
            const tChats = (state.cardChats || []).filter(c => c.cardId === task.id);
            const count = tChats.length;
            
            moveControlsHTML += `
                <div style="display: flex; gap: 4px; align-items: center;">
                    <!-- 💬 Card Comment Icon -->
                    <button type="button" class="btn-memo-action comment" onclick="event.stopPropagation(); openCardChatPanel('${task.id}', '${task.title.replace(/'/g, "\\'")}')" title="一言チャット" style="border: none; background: none; cursor: pointer; color: ${count > 0 ? 'var(--color-pink)' : 'var(--text-secondary)'}; padding: 4px; position: relative; display: inline-flex; align-items: center; justify-content: center;">
                        <i data-lucide="message-square" style="width: 12px; height: 12px;"></i>
                        ${count > 0 ? `<span style="font-size: 7px; font-weight: bold; background: var(--color-pink); color: white; padding: 0px 3px; border-radius: 4px; position: absolute; top: -3px; right: -3px; z-index: 5;">${count}</span>` : ''}
                    </button>
                    <button type="button" class="btn-memo-action edit" onclick="openEditTask('${task.id}')" title="編集" style="border: none; background: none; cursor: pointer; color: var(--text-secondary); padding: 4px;"><i data-lucide="edit-3" style="width: 12px; height: 12px;"></i></button>
                    <button type="button" class="btn-memo-action delete" onclick="deleteTask('${task.id}')" title="削除" style="border: none; background: none; cursor: pointer; color: var(--color-pink); padding: 4px;"><i data-lucide="trash-2" style="width: 12px; height: 12px;"></i></button>
                </div>
            `;
            
            let rightStatus = '';
            if (status === 'todo') rightStatus = 'doing';
            else if (status === 'doing') rightStatus = 'review';
            else if (status === 'review') rightStatus = 'done';
            
            if (rightStatus) {
                moveControlsHTML += `<button type="button" class="btn btn-outline" style="padding: 2px 6px; font-size: 10px; height: 22px; cursor: pointer; border-radius: 4px; display: inline-flex; align-items: center;" onclick="moveTaskStatus('${task.id}', '${rightStatus}')"><i data-lucide="arrow-right" style="width: 10px; height: 10px;"></i></button>`;
            } else {
                moveControlsHTML += `<div></div>`;
            }
            
            moveControlsHTML += '</div>';
            
            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 9.5px; font-weight: 750; background: ${prioColor}15; color: ${prioColor}; padding: 2px 6px; border-radius: 4px;">優先度: ${prioText}</span>
                    <span style="font-size: 10.5px; color: var(--text-secondary); font-weight: 750;" class="${assigneeClass}">👤 ${assigneeName}</span>
                </div>
                <h4 style="font-size: 13.5px; font-weight: 750; color: var(--text-primary); margin: 6px 0 2px 0; line-height: 1.4; cursor: pointer;" onclick="openEditTask('${task.id}')">${task.title}</h4>
                ${task.desc ? `<p style="font-size: 11px; color: var(--text-secondary); line-height: 1.45; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin: 0; white-space: pre-wrap;">${task.desc}</p>` : ''}
                <div style="display: flex; align-items: center; justify-content: space-between; font-size: 10px; color: var(--text-secondary); margin-top: 4px; font-weight: 600;">
                    <span style="display: inline-flex; align-items: center; gap: 4px;"><i data-lucide="calendar" style="width: 11px; height: 11px;"></i> 期限: ${task.deadline || '未定'}</span>
                </div>
                ${moveControlsHTML}
            `;
            
            col.container.appendChild(card);
        });
    });
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
window.renderTasks = renderTasks;

function initTaskEvents() {
    const addTaskBtn = document.getElementById('btn-add-task-modal');
    if (addTaskBtn) {
        addTaskBtn.addEventListener('click', () => {
            document.getElementById('task-modal-title').textContent = 'タスクを追加';
            document.getElementById('task-edit-id').value = '';
            document.getElementById('task-title').value = '';
            document.getElementById('task-assignee').value = 'both';
            document.getElementById('task-status').value = 'todo';
            document.getElementById('task-priority').value = 'medium';
            document.getElementById('task-deadline').value = new Date().toISOString().split('T')[0];
            document.getElementById('task-desc').value = '';
            openModal('modal-add-task');
        });
    }
    
    const submitTaskBtn = document.getElementById('btn-submit-task');
    if (submitTaskBtn) {
        submitTaskBtn.removeEventListener('click', handleAddOrEditTask); // 重複登録防止
        submitTaskBtn.addEventListener('click', handleAddOrEditTask);
    }
}
window.initTaskEvents = initTaskEvents;

function handleAddOrEditTask() {
    const editIdInput = document.getElementById('task-edit-id');
    const titleInput = document.getElementById('task-title');
    const assigneeSelect = document.getElementById('task-assignee');
    const statusSelect = document.getElementById('task-status');
    const prioritySelect = document.getElementById('task-priority');
    const deadlineInput = document.getElementById('task-deadline');
    const descInput = document.getElementById('task-desc');
    
    if (!titleInput || !deadlineInput) return;
    
    const title = titleInput.value.trim();
    const assignee = assigneeSelect.value;
    const status = statusSelect.value;
    const priority = prioritySelect.value;
    const deadline = deadlineInput.value;
    const desc = descInput ? descInput.value.trim() : '';
    const editId = editIdInput ? editIdInput.value : '';
    
    if (!title || !deadline) {
        alert('タスク名と期限日を入力してください。');
        return;
    }
    
    if (!state.tasks) state.tasks = [];
    
    if (editId) {
        const task = state.tasks.find(t => t.id === editId);
        if (task) {
            task.title = title;
            task.assignee = assignee;
            task.status = status;
            task.priority = priority;
            task.deadline = deadline;
            task.desc = desc;
            showToast('タスクを更新しました！');
        }
    } else {
        const newTask = {
            id: 'task-' + Date.now(),
            title: title,
            assignee: assignee,
            status: status,
            priority: priority,
            deadline: deadline,
            desc: desc
        };
        state.tasks.push(newTask);
        showToast('タスクを新しく追加しました！');
    }
    
    saveState();
    closeModal('modal-add-task');
    renderTasks();
}
window.handleAddOrEditTask = handleAddOrEditTask;

function deleteTask(id) {
    if (!state.tasks || !Array.isArray(state.tasks)) {
        state.tasks = [];
    }
    const task = state.tasks.find(t => t && t.id === id);
    if (!task) return;

    if (confirm(`本当にタスク「${task.title || ''}」を削除しますか？`)) {
        state.tasks = state.tasks.filter(t => t && t.id !== id);
        saveState();
        renderTasks();
        showToast('タスクを削除しました', 'danger');
    }
}
window.deleteTask = deleteTask;

function moveTaskStatus(id, newStatus) {
    const task = state.tasks.find(t => t.id === id);
    if (!task) return;
    
    task.status = newStatus;
    saveState();
    renderTasks();
    showToast('タスクの位置を変更しました');
}
window.moveTaskStatus = moveTaskStatus;

// ==========================================
// 20. 🆕 通知センター ＆ スマートアラート
// ==========================================
function renderNotifications() {
    const listContainer = document.getElementById('notifications-list');
    if (!listContainer) return;
    
    if (!state.notifications) state.notifications = [];
    
    if (state.notifications.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state" style="padding: 24px 16px; text-align: center; color: var(--text-secondary); font-size: 12.5px;">
                <i data-lucide="bell-off" style="width: 24px; height: 24px; margin-bottom: 8px; opacity: 0.5; margin-left: auto; margin-right: auto;"></i>
                <p>新しい通知はありません</p>
            </div>
        `;
        return;
    }
    
    listContainer.innerHTML = '';
    // 新しい通知を上に表示
    [...state.notifications].reverse().forEach(n => {
        const item = document.createElement('div');
        item.className = `noti-item ${n.read ? 'read' : 'unread'}`;
        item.style.padding = '10px 16px';
        item.style.borderBottom = '1px solid var(--border-color)';
        item.style.backgroundColor = n.read ? 'transparent' : 'rgba(79, 70, 229, 0.03)';
        item.style.cursor = 'pointer';
        item.style.transition = 'background 0.2s';
        
        let icon = 'info';
        let iconColor = 'var(--color-primary)';
        if (n.type === 'success') {
            icon = 'check-circle';
            iconColor = 'var(--color-green)';
        } else if (n.type === 'warning') {
            icon = 'alert-triangle';
            iconColor = '#f59e0b';
        } else if (n.type === 'danger') {
            icon = 'alert-circle';
            iconColor = 'var(--color-pink)';
        }
        
        item.innerHTML = `
            <div style="display: flex; gap: 10px; align-items: flex-start;">
                <i data-lucide="${icon}" style="width: 16px; height: 16px; color: ${iconColor}; flex-shrink: 0; margin-top: 2px;"></i>
                <div style="flex-grow: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                        <span style="font-size: 12.2px; font-weight: 750; color: var(--text-primary);">${n.title}</span>
                        <span style="font-size: 9.5px; color: var(--text-secondary); font-weight: 600;">${n.date}</span>
                    </div>
                    <p style="font-size: 11px; color: var(--text-secondary); line-height: 1.45; margin: 0;">${n.desc}</p>
                </div>
            </div>
        `;
        
        item.addEventListener('click', () => {
            n.read = true;
            saveState();
            renderNotifications();
            updateNotificationBadge();
        });
        
        listContainer.appendChild(item);
    });
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
window.renderNotifications = renderNotifications;

function updateNotificationBadge() {
    const badge = document.getElementById('notification-badge');
    if (!badge) return;
    
    if (!state.notifications) state.notifications = [];
    
    const unreadCount = state.notifications.filter(n => !n.read).length;
    if (unreadCount > 0) {
        badge.textContent = unreadCount;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}
window.updateNotificationBadge = updateNotificationBadge;

function createNotification(title, desc, type = 'info') {
    if (!state.notifications) state.notifications = [];
    
    const dateStr = new Date().toISOString().split('T')[0];
    
    // 同じ日に全く同一の通知がある場合は重複作成を防止
    const exists = state.notifications.some(n => n.title === title && n.desc === desc && n.date === dateStr);
    if (exists) return;
    
    const noti = {
        id: 'noti-' + Date.now(),
        title: title,
        desc: desc,
        type: type,
        date: dateStr,
        read: false
    };
    
    state.notifications.push(noti);
    saveState();
    renderNotifications();
    updateNotificationBadge();
}
window.createNotification = createNotification;

function initNotificationEvents() {
    const bell = document.getElementById('btn-notifications');
    const dropdown = document.getElementById('notifications-dropdown');
    
    if (bell && dropdown) {
        bell.addEventListener('click', (e) => {
            e.stopPropagation();
            const isShowing = dropdown.style.display === 'block';
            dropdown.style.display = isShowing ? 'none' : 'block';
            if (!isShowing) {
                renderNotifications();
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && e.target !== bell) {
                dropdown.style.display = 'none';
            }
        });
    }
    
    const clearBtn = document.getElementById('btn-clear-notifications');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (state.notifications) {
                state.notifications.forEach(n => n.read = true);
                saveState();
                renderNotifications();
                updateNotificationBadge();
                showToast('すべての通知を既読にしました');
            }
        });
    }
    
    // 起動時にリマインダーや残高のアラートチェック
    checkSystemReminders();
}
window.initNotificationEvents = initNotificationEvents;

function checkSystemReminders() {
    // 1. 割り勘バランスのチェック
    let totalIncome = 0;
    if (state.incomes) state.incomes.forEach(i => totalIncome += i.amount);
    let totalExpense = 0;
    let pAPaid = 0;
    let pBPaid = 0;
    
    state.expenses.forEach(e => {
        totalExpense += e.amount;
        if (e.payer === 'partnerA') pAPaid += e.amount;
        else pBPaid += e.amount;
    });
    
    const pAShare = state.agreement.pAShare || 50;
    const pBShare = state.agreement.pBShare || 50;
    const pAShouldPay = totalExpense * (pAShare / 100);
    const pBShouldPay = totalExpense * (pBShare / 100);
    
    if (pAPaid > pAShouldPay) {
        const diff = Math.round(pAPaid - pAShouldPay);
        if (diff > 5000) {
            createNotification(
                '💸 清算バランス発生中',
                `${state.settings.partnerBName}さんから${state.settings.partnerAName}さんへ ¥${diff.toLocaleString()} の未清算金額があります。`,
                'warning'
            );
        }
    } else if (pBPaid > pBShouldPay) {
        const diff = Math.round(pBPaid - pBShouldPay);
        if (diff > 5000) {
            createNotification(
                '💸 清算バランス発生中',
                `${state.settings.partnerAName}さんから${state.settings.partnerBName}さんへ ¥${diff.toLocaleString()} の未清算金額があります。`,
                'warning'
            );
        }
    }
    
    // 2. カレンダー予定の接近アラート
    if (state.events) {
        const today = new Date().toISOString().split('T')[0];
        const tomorrow = new Date(Date.now() + 24*60*60*1000).toISOString().split('T')[0];
        
        state.events.forEach(evt => {
            if (evt.date === today) {
                createNotification(
                    '📅 本日の予定があります',
                    `予定「${evt.title}」が本日予定されています。 (${evt.time || '終日'})`,
                    'info'
                );
            } else if (evt.date === tomorrow) {
                createNotification(
                    '📅 明日の予定リマインダー',
                    `明日「${evt.title}」の予定があります。確認しておきましょう。`,
                    'info'
                );
            }
        });
    }
    
    // 3. マイルストーン目標達成の接近チェック
    if (state.goals) {
        state.goals.forEach(goal => {
            const pct = goal.current / goal.target;
            if (pct >= 0.9 && pct < 1.0) {
                createNotification(
                    '🎯 目標達成まであと一歩！',
                    `目標「${goal.title}」の進捗率が${Math.round(pct * 100)}%に達しました！`,
                    'success'
                );
            }
        });
    }
}

// ==========================================
// 21. 🆕 クイック伝言板チャットボード
// ==========================================
function renderQuickChat() {
    const chatContainer = document.getElementById('quick-chat-messages');
    if (!chatContainer) return;
    
    if (!state.chatMessages) state.chatMessages = [];
    
    if (state.chatMessages.length === 0) {
        chatContainer.innerHTML = `
            <div style="text-align: center; color: var(--text-secondary); padding: 40px 10px; font-size: 12.5px; font-weight: 500;">
                <i data-lucide="message-square" style="width: 24px; height: 24px; margin-bottom: 8px; opacity: 0.5; margin-left: auto; margin-right: auto;"></i>
                <p>メッセージはまだありません。相方への連絡事項や伝言を残しましょう！</p>
            </div>
        `;
        return;
    }
    
    chatContainer.innerHTML = '';
    state.chatMessages.forEach(msg => {
        const senderName = msg.sender === 'partnerA' ? state.settings.partnerAName : state.settings.partnerBName;
        const senderClass = msg.sender === 'partnerA' ? 'pA' : 'pB';
        const isPartnerA = msg.sender === 'partnerA';
        
        const msgDiv = document.createElement('div');
        msgDiv.style.display = 'flex';
        msgDiv.style.gap = '10px';
        msgDiv.style.maxWidth = '85%';
        msgDiv.style.alignSelf = isPartnerA ? 'flex-start' : 'flex-end';
        msgDiv.style.flexDirection = 'row';
        
        // 吹き出しのグラスモルフィズム調カラー
        const bubbleStyle = isPartnerA 
            ? 'background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 0 12px 12px 12px;'
            : 'background: rgba(168, 85, 247, 0.05); border: 1px solid rgba(168, 85, 247, 0.15); border-radius: 12px 0 12px 12px;';
        
        const avatarBg = isPartnerA ? 'var(--color-primary)' : 'var(--color-purple)';
        const avatarChar = senderName ? senderName.charAt(0) : '👤';
        
        msgDiv.innerHTML = `
            ${isPartnerA ? `<div style="width: 28px; height: 28px; border-radius: 50%; background: ${avatarBg}; color: white; display: flex; align-items: center; justify-content: center; font-size: 11.5px; font-weight: 700; flex-shrink: 0;">${avatarChar}</div>` : ''}
            <div>
                <div style="font-size: 9.5px; color: var(--text-secondary); margin-bottom: 2px; font-weight: 750; text-align: ${isPartnerA ? 'left' : 'right'};" class="${senderClass}">${senderName} <span style="font-size: 8.5px; color: var(--text-muted); font-weight: 500;">(${msg.date})</span></div>
                <div style="${bubbleStyle} padding: 8px 12px; font-size: 12px; line-height: 1.45; color: var(--text-primary); font-weight: 500; word-break: break-all; white-space: pre-wrap;">${msg.text}</div>
            </div>
            ${!isPartnerA ? `<div style="width: 28px; height: 28px; border-radius: 50%; background: ${avatarBg}; color: white; display: flex; align-items: center; justify-content: center; font-size: 11.5px; font-weight: 700; flex-shrink: 0;">${avatarChar}</div>` : ''}
        `;
        
        chatContainer.appendChild(msgDiv);
    });
    
    // スムーズスクロールで最下部へ移動
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
window.renderQuickChat = renderQuickChat;

function initQuickChatEvents() {
    const sendBtn = document.getElementById('btn-send-chat');
    const chatInput = document.getElementById('chat-input');
    if (sendBtn && chatInput) {
        sendBtn.addEventListener('click', sendQuickChatMessage);
        
        let enterCount = 0;
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (e.isComposing) {
                    // IME 確定用のエンター
                    enterCount = 1;
                    return;
                }
                
                enterCount++;
                if (enterCount >= 2) {
                    sendQuickChatMessage();
                    enterCount = 0;
                } else {
                    e.preventDefault(); // 1回目は送信しない
                }
            } else {
                enterCount = 0; // エンター以外のキーが押されたらカウントリセット
            }
        });
    }
}
window.initQuickChatEvents = initQuickChatEvents;

function sendQuickChatMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatSender = document.getElementById('chat-sender');
    
    if (!chatInput || !chatSender) return;
    
    const text = chatInput.value.trim();
    const sender = chatSender.value;
    
    if (!text) return;
    
    if (!state.chatMessages) state.chatMessages = [];
    
    const now = new Date();
    const timeStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    
    const msg = {
        id: 'chat-' + Date.now(),
        sender: sender,
        text: text,
        date: timeStr
    };
    
    state.chatMessages.push(msg);
    saveState();
    
    chatInput.value = '';
    renderQuickChat();
    
    // メンション検知と通知トリガー
    const targetNameA = state.settings.partnerAName;
    const targetNameB = state.settings.partnerBName;
    
    if (sender === 'partnerA' && text.includes('@' + targetNameB)) {
        createNotification(
            '💬 伝言板でメンションされました',
            `${targetNameA}: "${text}"`,
            'info'
        );
    } else if (sender === 'partnerB' && text.includes('@' + targetNameA)) {
        createNotification(
            '💬 伝言板でメンションされました',
            `${targetNameB}: "${text}"`,
            'info'
        );
    }
}
window.sendQuickChatMessage = sendQuickChatMessage;

// ==========================================
// 22. 🆕 AIアイデア壁打ちチャット (Advisor)
// ==========================================
function initAIChatEvents() {
    const saveApiKeyBtn = document.getElementById('btn-save-api-key');
    const apiKeyInput = document.getElementById('gemini-api-key');
    
    if (saveApiKeyBtn && apiKeyInput) {
        if (state.geminiApiKey) {
            apiKeyInput.value = state.geminiApiKey;
        }
        
        saveApiKeyBtn.addEventListener('click', () => {
            state.geminiApiKey = apiKeyInput.value.trim();
            saveState();
            showToast('Gemini APIキーを保存しました！');
        });
    }
    
    const sendAIChatBtn = document.getElementById('btn-send-ai-chat');
    const aiChatInput = document.getElementById('ai-chat-input');
    if (sendAIChatBtn && aiChatInput) {
        sendAIChatBtn.addEventListener('click', sendAIChatMessage);
        
        let enterCount = 0;
        aiChatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (e.isComposing) {
                    // IME 確定用のエンター
                    enterCount = 1;
                    return;
                }
                
                enterCount++;
                if (enterCount >= 2) {
                    sendAIChatMessage();
                    enterCount = 0;
                } else {
                    e.preventDefault(); // 1回目は送信しない
                }
            } else {
                enterCount = 0; // エンター以外のキーが押されたらカウントリセット
            }
        });
    }
}
window.initAIChatEvents = initAIChatEvents;

async function sendAIChatMessage() {
    const chatInput = document.getElementById('ai-chat-input');
    const messagesContainer = document.getElementById('ai-chat-messages');
    
    if (!chatInput || !messagesContainer) return;
    
    const text = chatInput.value.trim();
    if (!text) return;
    
    // ユーザーメッセージの表示
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'chat-msg user';
    userMsgDiv.style.display = 'flex';
    userMsgDiv.style.gap = '10px';
    userMsgDiv.style.maxWidth = '85%';
    userMsgDiv.style.alignSelf = 'flex-end';
    userMsgDiv.style.flexDirection = 'row-reverse';
    
    userMsgDiv.innerHTML = `
        <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--color-primary); color: white; display: flex; align-items: center; justify-content: center; font-size: 11.5px; font-weight: 700; flex-shrink: 0;">ME</div>
        <div style="background: rgba(79, 70, 229, 0.05); border: 1px solid rgba(79, 70, 229, 0.15); border-radius: 12px 0 12px 12px; padding: 10px 14px; font-size: 12.8px; line-height: 1.5; color: var(--text-primary); font-weight: 500;">
            ${text}
        </div>
    `;
    messagesContainer.appendChild(userMsgDiv);
    chatInput.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // AI応答中のローディング表示
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-msg ai typing';
    typingDiv.style.display = 'flex';
    typingDiv.style.gap = '10px';
    typingDiv.style.maxWidth = '85%';
    typingDiv.style.alignSelf = 'flex-start';
    
    typingDiv.innerHTML = `
        <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--color-purple); color: white; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; flex-shrink: 0;"><i data-lucide="bot" style="width: 14px; height: 14px;"></i></div>
        <div style="background: white; border: 1px solid #e2e8f0; border-radius: 0 12px 12px 12px; padding: 10px 14px; font-size: 12.8px; line-height: 1.5; color: var(--text-secondary); font-weight: 500;">
            アドバイザーが回答を作成中...
        </div>
    `;
    messagesContainer.appendChild(typingDiv);
    if (typeof lucide !== 'undefined') lucide.createIcons();
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    let reply = '';
    
    const systemPrompt = `You are LumiJourney Smart Advisor, an expert co-founder consultant for a travel startup called LumiJourney. 
LumiJourney is a premium travel planning service that creates highly personalized itineraries for international travelers visiting Japan (specifically tourists who struggle with planning or find it tedious).
The project founders are Kouki (煌記) and Kazuya (和弥).
Always answer in Japanese. Give professional, sharp, insightful startup and marketing advice. Keep your response structured and visually appealing (using bullet points and brief bold headers). Make it clear, inspiring, and direct.`;

    const prompt = `${systemPrompt}\n\nUser Question: ${text}`;
    
    if (state.geminiApiKey) {
        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${state.geminiApiKey}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }]
                })
            });
            if (response.ok) {
                const resData = await response.json();
                if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
                    reply = resData.candidates[0].content.parts[0].text;
                } else {
                    throw new Error('Unexpected API structure');
                }
            } else {
                const errorData = await response.json();
                reply = `⚠️ Gemini APIエラーが発生しました。APIキーを確認してください。\nエラーメッセージ: ${errorData.error ? errorData.error.message : 'エラーが発生しました'}`;
            }
        } catch (err) {
            console.error('Gemini error:', err);
            reply = `⚠️ AIとの接続に失敗しました。ローカル模擬アドバイスを返信します。\n\n` + getLocalMockupReply(text);
        }
    } else {
        // 高級感のある体験設計のための疑似ディレイ
        await new Promise(resolve => setTimeout(resolve, 1500));
        reply = getLocalMockupReply(text);
    }
    
    // ローディング表示を削除してAI回答を描画
    messagesContainer.removeChild(typingDiv);
    
    const aiMsgDiv = document.createElement('div');
    aiMsgDiv.className = 'chat-msg ai';
    aiMsgDiv.style.display = 'flex';
    aiMsgDiv.style.gap = '10px';
    aiMsgDiv.style.maxWidth = '85%';
    aiMsgDiv.style.alignSelf = 'flex-start';
    
    aiMsgDiv.innerHTML = `
        <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--color-purple); color: white; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; flex-shrink: 0;"><i data-lucide="bot" style="width: 14px; height: 14px;"></i></div>
        <div style="background: white; border: 1px solid #e2e8f0; border-radius: 0 12px 12px 12px; padding: 10px 14px; font-size: 12.8px; line-height: 1.5; color: var(--text-primary); font-weight: 500; white-space: pre-wrap;">${reply}</div>
    `;
    messagesContainer.appendChild(aiMsgDiv);
    if (typeof lucide !== 'undefined') lucide.createIcons();
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getLocalMockupReply(userText) {
    const text = userText.toLowerCase();
    
    if (text.includes('コピー') || text.includes('キャッチ') || text.includes('文章') || text.includes('lp')) {
        return `💡 **LumiJourneyの魅力が深く刺さるLPコピー案**

「日本旅行は楽しみだが、何十時間も計画を立てる時間がない...」というターゲット層（タイパ重視の国際旅行者）に直撃するフレーズ案です。

1. **「日本を味わい尽くす、究極の『手間なし』テーラーメイド旅をあなたに。」**
   - **狙い**: 時間はないが旅の体験に一切の妥協をしたくないエグゼクティブ・富裕層。
2. **「ガイドブックを閉じて、あなただけの日本旅行コンシェルジュを持とう。」**
   - **狙い**: 予定を組むこと自体をストレスに感じる20代〜30代のミレニアル・Z世代。
3. **「アレルギー、家族連れ、特別な要望... すべてを解決するプランが1回の面談で完成。」**
   - **狙い**: 新しく導入したZoomヒアリングシートに該当する、個別要件が厳しい不安の大きい旅行者。

**📌 アクションプラン**:
LPファーストビューのすぐ近くに、**「15分のZoom面談で旅行計画のストレスから解放」**という利点を強く主張し、今すぐ面談を申し込めるボタンを配置してください！`;
    }
    
    if (text.includes('ターゲット') || text.includes('客') || text.includes('集客') || text.includes('マーケ')) {
        return `📊 **インバウンド層に特化したLP集客＆マーケティングチャネル設計**

旅行計画に悩む英語圏の旅行者に向けた、初期集客モデルの提案です。

1. **Reddit等の旅行コミュニティにおけるお悩み回答 (Organic)**
   - r/JapanTravel などの日本旅行情報スレッドで、「京都と金沢を3日間でアレルギー対応ありで巡るにはどうすればいい？」という投稿に対し、親身になって回答した上でLumiJourneyの無料相談リンクを紹介します。
2. **Instagram / TikTokでの『計画失敗あるある』動画のUGC構築**
   - 「日本旅行でホテルと切符の手配で20時間無駄にした話」などのショート動画を発信し、面談での解決体験（ビフォーアフター）を訴求します。
3. **顧客の声（クチコミ）のビジュアル化**
   - 最初のモニター顧客から、日本を楽しんでいる満面の笑みの写真と英語の直筆レビューを回収し、LPのメインセクションに並べることで信頼度を最大化します。

**📌 アドバイス**: 初期はとにかく「質」と「顧客の声」を重視し、高評価を積み重ねるのが最大のマーケ施策になります！`;
    }
    
    return `🤝 **LumiJourneyビジネスプランへのアドバイス**

煌記さん、和弥さん、旅行計画サービス「LumiJourney」のローンチ＆検証に向けて！

- **現在の検証優先事項**:
  顧客管理の編集・登録画面に追加された **ヒアリングシート(Zoom面談用)** は、営業活動の非常に重要なデータ源です。面談の際は特に、
  1. 旅行者が「日本のどこに最も期待しているか（王道京都か、ディープなローカルか）」
  2. 「予算の使い道のメリハリ（宿にお金をかけるか、特別な体験に投資するか）」
  3. 「アレルギーや子供連れなど、計画を難しくしている真の障害」
  を的確に言語化して記録し、プラン提案の精度を研ぎ澄ましてください。

Gemini APIキーを設定すると、お二人の独自の状況に応じた、さらに緻密で具体的なLP原稿添削や、事業計画の評価が可能になります。

LumiJourneyの成功に向けて、最高の一歩を踏み出しましょう！`;
}

// ==========================================
// 23. 🆕 LPアクセス分析トレンド ＆ CVファネル
// ==========================================
let analyticsTrendChartInstance = null;

function renderLPAnalytics() {
    const pvEl = document.getElementById('analytics-pv');
    const uuEl = document.getElementById('analytics-uu');
    const cvrEl = document.getElementById('analytics-cvr');
    const bounceEl = document.getElementById('analytics-bounce');
    
    if (!state.customers) state.customers = [];
    
    const customerCount = state.customers.length;
    
    // 顧客数とリアルタイムに同期した統計値を算出
    const uuVal = 860 + (customerCount * 12);
    const pvVal = Math.round(uuVal * 1.45) + (customerCount * 5);
    const cvVal = 27 + customerCount;
    const cvrVal = ((cvVal / uuVal) * 100).toFixed(1);
    const bounceVal = (42.1 - (customerCount * 0.1)).toFixed(1);
    
    if (pvEl) pvEl.textContent = `${pvVal.toLocaleString()} PV`;
    if (uuEl) uuEl.textContent = `${uuVal.toLocaleString()} UU`;
    if (cvrEl) cvrEl.textContent = `${cvrVal} %`;
    if (bounceEl) bounceEl.textContent = `${bounceVal} %`;
    
    // マーケティングCVファネルの数値を更新
    const step1 = document.getElementById('funnel-step-1');
    const step2 = document.getElementById('funnel-step-2');
    const step3 = document.getElementById('funnel-step-3');
    const step4 = document.getElementById('funnel-step-4');
    
    const bar2 = document.getElementById('funnel-bar-2');
    const bar3 = document.getElementById('funnel-bar-3');
    const bar4 = document.getElementById('funnel-bar-4');
    
    if (step1) step1.textContent = `${uuVal} UU (100%)`;
    
    const s2Uu = Math.round(uuVal * 0.488);
    const s2Pct = 48.8;
    if (step2) step2.textContent = `${s2Uu} UU (${s2Pct}%)`;
    if (bar2) bar2.style.width = `${s2Pct}%`;
    
    const s3Uu = Math.round(uuVal * 0.095) + customerCount;
    const s3Pct = ((s3Uu / uuVal) * 100).toFixed(1);
    if (step3) step3.textContent = `${s3Uu} UU (${s3Pct}%)`;
    if (bar3) bar3.style.width = `${s3Pct}%`;
    
    const s4Val = cvVal;
    const s4Pct = cvrVal;
    if (step4) step4.textContent = `${s4Val} 件 (${s4Pct}%)`;
    if (bar4) bar4.style.width = `${s4Pct}%`;
    
    // Chart.jsによるアクセストレンド折れ線グラフ描画 (修正: 正しいID lp-analytics-chart をクエリ)
    const ctx = document.getElementById('lp-analytics-chart');
    if (!ctx) return;
    
    if (analyticsTrendChartInstance) {
        analyticsTrendChartInstance.destroy();
    }
    
    const dates = [];
    const pvData = [];
    const uuData = [];
    const cvData = [];
    
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        dates.push(`${d.getMonth() + 1}/${d.getDate()}`);
        
        // 曜日による波形と顧客数の掛け合わせ
        const baseUU = 110 + Math.sin(i) * 15 + (customerCount * 2);
        const basePV = baseUU * 1.45 + Math.cos(i) * 10;
        const baseCV = Math.max(1, Math.round(baseUU * 0.03) + (i === 0 ? customerCount : 0));
        
        uuData.push(Math.round(baseUU));
        pvData.push(Math.round(basePV));
        cvData.push(Math.round(baseCV));
    }
    
    analyticsTrendChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [
                {
                    label: 'PV (ページビュー)',
                    data: pvData,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.02)',
                    borderWidth: 2,
                    tension: 0.35,
                    fill: true,
                    pointBackgroundColor: '#10b981',
                    pointHoverRadius: 6
                },
                {
                    label: 'UU (ユニーク訪問者)',
                    data: uuData,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.02)',
                    borderWidth: 2,
                    tension: 0.35,
                    fill: true,
                    pointBackgroundColor: '#3b82f6',
                    pointHoverRadius: 6
                },
                {
                    label: 'CV (コンバージョン/成約)',
                    data: cvData,
                    borderColor: '#ec4899',
                    backgroundColor: 'rgba(236, 72, 153, 0.02)',
                    borderWidth: 2.5,
                    tension: 0.35,
                    fill: true,
                    pointBackgroundColor: '#ec4899',
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // HTML側にインジケーター凡例があるため非表示
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 9, weight: '700', family: 'Outfit' }, color: 'rgba(255,255,255,0.4)' }
                },
                y: {
                    grid: { color: 'rgba(255,255,255,0.03)' },
                    ticks: { font: { size: 9, weight: '700', family: 'Outfit' }, color: 'rgba(255,255,255,0.4)' }
                }
            }
        },
        plugins: [{
            id: 'neonGlow',
            beforeDatasetsDraw: (chart) => {
                const ctx = chart.ctx;
                ctx.save();
                ctx.shadowBlur = 12;
                ctx.shadowColor = 'rgba(236, 72, 153, 0.35)'; // ネオンパープルグロー効果
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 2;
            },
            afterDatasetsDraw: (chart) => {
                chart.ctx.restore();
            }
        }]
    });
}
window.renderLPAnalytics = renderLPAnalytics;

// ==========================================
// 22. 鉄壁データ保護・マージ・復旧システム (Data Protection & Automerge)
// ==========================================

// 22.1 世代別自動バックアップの保存
function saveToHistory(stateToSave) {
    try {
        if (!stateToSave || typeof stateToSave !== 'object') return;
        
        let history = [];
        const rawHistory = localStorage.getItem('cofounder_hub_history');
        if (rawHistory) {
            history = JSON.parse(rawHistory);
        }
        if (!Array.isArray(history)) history = [];

        // ディープコピーを作成
        const cleanState = JSON.parse(JSON.stringify(stateToSave));
        
        // 直前の履歴と同じ状態なら保存をスキップ（不要な容量消費を防ぐ）
        if (history.length > 0 && JSON.stringify(history[0].data) === JSON.stringify(cleanState)) {
            return;
        }

        // 新しい履歴を先頭に追加
        history.unshift({
            timestamp: Date.now(),
            data: cleanState
        });

        // 最大10世代に制限
        if (history.length > 10) {
            history = history.slice(0, 10);
        }

        localStorage.setItem('cofounder_hub_history', JSON.stringify(history));
        console.log('🛡️ Generational backup saved. History size:', history.length);
    } catch (e) {
        console.error('Failed to save state to history:', e);
    }
}

// 22.2 配列データのスマートマージ (IDベース & updatedAt比較)
function mergeArrayById(localArr, cloudArr, uniqueKey = 'id') {
    const local = Array.isArray(localArr) ? localArr : [];
    const cloud = Array.isArray(cloudArr) ? cloudArr : [];
    
    const localMap = new Map(local.map(item => [item[uniqueKey], item]));
    const cloudMap = new Map(cloud.map(item => [item[uniqueKey], item]));
    
    const merged = [];
    const allKeys = new Set([...localMap.keys(), ...cloudMap.keys()]);
    
    for (const key of allKeys) {
        const localItem = localMap.get(key);
        const cloudItem = cloudMap.get(key);
        
        if (localItem && cloudItem) {
            // 両方にある場合、更新時間（updatedAt / lastUpdated / date）を比較
            const localTime = Number(localItem.updatedAt || localItem.lastUpdated || (localItem.date ? new Date(localItem.date).getTime() : 0) || 0);
            const cloudTime = Number(cloudItem.updatedAt || cloudItem.lastUpdated || (cloudItem.date ? new Date(cloudItem.date).getTime() : 0) || 0);
            
            if (localTime >= cloudTime) {
                merged.push(localItem);
            } else {
                merged.push(cloudItem);
            }
        } else if (localItem) {
            // ローカルにしかない（新規追加）
            merged.push(localItem);
        } else if (cloudItem) {
            // クラウドにしかない（他方が追加したもの）
            merged.push(cloudItem);
        }
    }
    return merged;
}

// 22.3 クラウドとローカルの全項目スマートマージ
function smartMergeState(local, cloud) {
    if (!local || typeof local !== 'object') return cloud;
    if (!cloud || typeof cloud !== 'object') return local;

    console.log('🧠 Executing smart merge of local and cloud states...');

    const merged = { ...local };

    // 設定や合意のメタオブジェクトはディープマージ
    if (local.settings && cloud.settings) {
        merged.settings = { ...local.settings, ...cloud.settings };
    }
    if (local.agreement && cloud.agreement) {
        merged.agreement = { ...local.agreement, ...cloud.agreement };
    }

    // 主要な配列データをIDベースでスマートマージ
    const arrayKeys = [
        { key: 'sharedMemos', id: 'id' },
        { key: 'ideas', id: 'id' },
        { key: 'goals', id: 'id' },
        { key: 'events', id: 'id' },
        { key: 'expenses', id: 'id' },
        { key: 'incomes', id: 'id' },
        { key: 'decisions', id: 'id' },
        { key: 'updates', id: 'id' },
        { key: 'customers', id: 'id' },
        { key: 'phases', id: 'id' },
        { key: 'changelogs', id: 'id' },
        { key: 'aiChatHistory', id: 'id' },
        { key: 'cardChats', id: 'id' }
    ];

    arrayKeys.forEach(({ key, id }) => {
        if (local[key] || cloud[key]) {
            merged[key] = mergeArrayById(local[key], cloud[key], id);
        }
    });

    // タイムスタンプは最新の方を採用
    merged.lastUpdated = Math.max(local.lastUpdated || 0, cloud.lastUpdated || 0, Date.now());

    console.log('🧠 Smart merge completed. Memos count:', (merged.sharedMemos || []).length);
    return merged;
}

// 22.4 復旧センターUIの描画
function renderRecoveryCenter() {
    const listContainer = document.getElementById('recovery-history-list');
    if (!listContainer) return;

    let history = [];
    try {
        const rawHistory = localStorage.getItem('cofounder_hub_history');
        if (rawHistory) {
            history = JSON.parse(rawHistory);
        }
    } catch (e) {
        console.error('Failed to parse history for UI:', e);
    }

    if (!Array.isArray(history) || history.length === 0) {
        listContainer.innerHTML = `
            <div class="recovery-history-empty" style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 11px;">
                履歴データがまだありません
            </div>
        `;
        return;
    }

    listContainer.innerHTML = '';
    history.forEach((item, index) => {
        const timeStr = new Date(item.timestamp).toLocaleString();
        const data = item.data || {};
        
        const memoCount = (data.sharedMemos || []).length;
        const ideaCount = (data.ideas || []).length;
        const taskCount = (data.goals || []).length; // 目標/タスク数
        
        const historyItem = document.createElement('div');
        historyItem.className = 'recovery-history-item';
        historyItem.innerHTML = `
            <div class="recovery-history-info">
                <span class="recovery-history-time">
                    <i data-lucide="clock" style="width: 12px; height: 12px; color: var(--color-pink);"></i> ${timeStr} ${index === 0 ? '<span style="color: var(--color-primary); font-size: 9px; font-weight: 700;">(最新)</span>' : ''}
                </span>
                <span class="recovery-history-meta">
                    メモ: ${memoCount}件 | アイデア: ${ideaCount}件 | マイルストーン: ${taskCount}件
                </span>
            </div>
            <button class="btn-rollback" onclick="rollbackToHistory(${index})">
                <i data-lucide="rotate-ccw" style="width: 10px; height: 10px;"></i> 復元
            </button>
        `;
        listContainer.appendChild(historyItem);
    });

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// 22.5 バックアップ履歴からのロールバック実行
async function rollbackToHistory(index) {
    try {
        let history = [];
        const rawHistory = localStorage.getItem('cofounder_hub_history');
        if (rawHistory) {
            history = JSON.parse(rawHistory);
        }

        if (!Array.isArray(history) || !history[index]) {
            alert('指定された履歴データが見つかりません。');
            return;
        }

        const targetItem = history[index];
        const confirmRollback = confirm(
            `🕒 以下の時点のデータにロールバックしますか？\n\n` +
            `・保存日時: ${new Date(targetItem.timestamp).toLocaleString()}\n` +
            `・共有メモ数: ${(targetItem.data.sharedMemos || []).length} 件\n` +
            `・アイデア数: ${(targetItem.data.ideas || []).length} 件\n\n` +
            `※現在の状態は、さらに「最新の履歴」として自動退避されるため、この復元操作自体を取り消すことも可能です。`
        );

        if (!confirmRollback) return;

        // 現在のデータを履歴に退避してから復旧
        saveToHistory(state);

        // stateとローカルストレージを復旧
        state = JSON.parse(JSON.stringify(targetItem.data));
        state.lastUpdated = Date.now(); // タイムスタンプを強制最新にし、クラウドにも同期

        const serialized = JSON.stringify(state);
        localStorage.setItem('cofounder_hub_state', serialized);
        localStorage.setItem('cofounder_hub_state_backup', serialized);

        console.log('Local restored. Uploading to cloud...');

        // クラウド（KVDB）への即時同期
        const secretKey = state.settings && state.settings.syncSecretKey;
        if (secretKey && secretKey.trim().length >= 4) {
            let hash = 0;
            for (let i = 0; i < secretKey.length; i++) {
                const char = secretKey.charCodeAt(i);
                hash = (hash << 5) - hash + char;
                hash = hash & hash;
            }
            const cleanKey = secretKey.replace(/[^a-zA-Z0-9]/g, '');
            const uniqueString = cleanKey + Math.abs(hash).toString(36);
            const keyName = (uniqueString + 'cofoundersync').substring(0, 16);
            
            const sharedBucket = "XCFoA3p5QxYZeeEomCFG68";
            const url = `https://kvdb.io/${sharedBucket}/${keyName}`;
            
            try {
                const response = await fetch(url, {
                    method: 'PUT',
                    mode: 'cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(state)
                });
                if (response.ok) {
                    console.log('Cloud update success after rollback.');
                }
            } catch (err) {
                console.error('Cloud upload error during rollback:', err);
            }
        }

        alert('🎉 データのロールバック（復元）が成功しました！');
        location.reload();
    } catch (e) {
        alert('ロールバック実行中にエラーが発生しました: ' + e.message);
    }
}

// グローバル公開
window.saveToHistory = saveToHistory;
window.smartMergeState = smartMergeState;
window.renderRecoveryCenter = renderRecoveryCenter;
window.rollbackToHistory = rollbackToHistory;

// ==========================================
// 24. 🆕 各カードへの一言チャットスレッド機能 (Threaded Chats)
// ==========================================
let activeCardChatId = null;

function detectMentions(text, senderName) {
    const pA = state.settings.partnerAName;
    const pB = state.settings.partnerBName;
    
    let isMentioned = false;
    let targetName = '';
    
    // パートナー同士のメンションチェック
    if (senderName === pA) {
        if (text.includes(`@${pB}`) || text.includes(pB)) {
            isMentioned = true;
            targetName = pB;
        }
    } else if (senderName === pB) {
        if (text.includes(`@${pA}`) || text.includes(pA)) {
            isMentioned = true;
            targetName = pA;
        }
    } else {
        // フォールバックチェック
        if (text.includes('@' + pA)) { isMentioned = true; targetName = pA; }
        if (text.includes('@' + pB)) { isMentioned = true; targetName = pB; }
    }
    
    if (isMentioned) {
        // 1. ヘッダーの通知ベルアイコンをブルブル震えさせる
        const bellBtn = document.getElementById('btn-notifications');
        if (bellBtn) {
            bellBtn.classList.add('bell-active-animation');
            setTimeout(() => {
                bellBtn.classList.remove('bell-active-animation');
            }, 1000);
        }
        
        // 2. お知らせログに登録
        if (!state.notifications) state.notifications = [];
        state.notifications.unshift({
            id: 'noti-' + Date.now(),
            title: '💬 一言チャットでメンションされました',
            desc: `${senderName}: "${text}"`,
            type: 'info',
            date: new Date().toISOString().split('T')[0],
            read: false
        });
        
        // 3. 極上パープルトースト通知
        showToast(`@${targetName} 宛ての新着メンションがあります！`, 'info');
        
        // 4. 通知一覧とバッジの再描画
        if (typeof renderNotifications === 'function') renderNotifications();
        if (typeof updateNotificationBadge === 'function') updateNotificationBadge();
    }
}

function openCardChatPanel(cardId, cardTitle) {
    activeCardChatId = cardId;
    const panel = document.getElementById('chat-slide-panel');
    const subtitle = document.getElementById('chat-panel-subtitle');
    
    if (!panel || !subtitle) return;
    
    subtitle.textContent = `対象カード: ${cardTitle}`;
    panel.classList.add('open');
    
    // スライドイン後にフォーカスをあてる
    setTimeout(() => {
        document.getElementById('chat-panel-input')?.focus();
    }, 200);
    
    renderCardChats();
}

function closeCardChatPanel() {
    activeCardChatId = null;
    const panel = document.getElementById('chat-slide-panel');
    if (panel) {
        panel.classList.remove('open');
    }
}

function renderCardChats() {
    const body = document.getElementById('chat-panel-body');
    if (!body || !activeCardChatId) return;
    
    body.innerHTML = '';
    
    const chats = (state.cardChats || []).filter(c => c.cardId === activeCardChatId);
    
    const pA = state.settings.partnerAName;
    const pB = state.settings.partnerBName;
    
    if (chats.length === 0) {
        body.innerHTML = `
            <div style="text-align: center; color: var(--text-muted); font-size: 11.5px; padding: 48px 16px;">
                <i data-lucide="messages-square" style="width: 32px; height: 32px; opacity: 0.2; margin-bottom: 8px; margin-left: auto; margin-right: auto;"></i>
                <p style="margin: 0; line-height: 1.5;">このカードにはまだチャットがありません。<br>下のフォームから最初のコメントを入力してお互いに相談・メモを残しましょう！</p>
            </div>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }
    
    chats.forEach(c => {
        // 送信者がどちらであるかを判別
        const isMe = c.sender === 'partnerA'; 
        const senderName = isMe ? pA : pB;
        
        const bubbleWrap = document.createElement('div');
        bubbleWrap.style.display = 'flex';
        bubbleWrap.style.flexDirection = 'column';
        bubbleWrap.style.gap = '2px';
        bubbleWrap.style.alignSelf = isMe ? 'flex-end' : 'flex-start';
        bubbleWrap.style.maxWidth = '85%';
        bubbleWrap.className = 'chat-msg';
        
        // メンション表現のハイライト置換 (@名前 -> ピンク)
        let textHtml = c.text;
        textHtml = textHtml.replace(/@([^\s，、。]+)/g, '<span style="color: #ff007f; font-weight: 750;">@$1</span>');
        
        bubbleWrap.innerHTML = `
            <span style="font-size: 9px; color: var(--text-muted); font-weight: 700; text-align: ${isMe ? 'right' : 'left'};">${senderName}</span>
            <div style="display: flex; gap: 6px; flex-direction: ${isMe ? 'row-reverse' : 'row'}; align-items: start;">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: ${isMe ? 'linear-gradient(135deg, var(--color-pink), #ff007f)' : 'rgba(255,255,255,0.06)'}; color: white; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800; border: 1px solid rgba(255,255,255,0.05); flex-shrink: 0;">
                    ${senderName.charAt(0).toUpperCase()}
                </div>
                <div style="background: ${isMe ? 'linear-gradient(135deg, #4f46e5, #6366f1)' : 'rgba(255, 255, 255, 0.03)'}; border: 1px solid ${isMe ? 'rgba(79, 70, 229, 0.2)' : 'rgba(255,255,255,0.05)'}; color: var(--text-main); border-radius: ${isMe ? '10px 0 10px 10px' : '0 10px 10px 10px'}; padding: 8px 12px; font-size: 12px; line-height: 1.45; word-break: break-all; box-shadow: 0 4px 10px rgba(0,0,0,0.15);">
                    ${textHtml}
                </div>
            </div>
            <span style="font-size: 8px; color: var(--text-muted); text-align: ${isMe ? 'right' : 'left'}; margin-top: 1px;">
                ${new Date(c.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </span>
        `;
        body.appendChild(bubbleWrap);
    });
    
    body.scrollTop = body.scrollHeight;
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function sendCardChatMessage() {
    const input = document.getElementById('chat-panel-input');
    if (!input || !activeCardChatId) return;
    
    const text = input.value.trim();
    if (!text) return;
    
    // システムのチャット送信者(chat-sender)に準拠
    const chatSender = document.getElementById('chat-sender');
    const sender = chatSender ? chatSender.value : 'partnerA';
    
    const pA = state.settings.partnerAName;
    const pB = state.settings.partnerBName;
    const senderName = sender === 'partnerA' ? pA : pB;
    
    if (!state.cardChats) state.cardChats = [];
    
    state.cardChats.push({
        id: 'cchat-' + Date.now(),
        cardId: activeCardChatId,
        sender: sender,
        text: text,
        timestamp: Date.now()
    });
    
    input.value = '';
    
    saveState();
    detectMentions(text, senderName);
    
    renderCardChats();
    
    // 親カードのチャット件数表示（バッジ）を更新するために各モジュールを再描画
    renderMemos();
    renderIdeas();
    renderTasks();
    renderCRM();
}

function initCardChatEvents() {
    const closeBtn = document.getElementById('btn-close-chat-panel');
    if (closeBtn) closeBtn.addEventListener('click', closeCardChatPanel);
    
    const sendBtn = document.getElementById('btn-send-panel-chat');
    const input = document.getElementById('chat-panel-input');
    
    if (sendBtn && input) {
        sendBtn.addEventListener('click', sendCardChatMessage);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                sendCardChatMessage();
            }
        });
    }
}

window.openCardChatPanel = openCardChatPanel;
window.closeCardChatPanel = closeCardChatPanel;
window.renderCardChats = renderCardChats;
window.sendCardChatMessage = sendCardChatMessage;
window.initCardChatEvents = initCardChatEvents;

// ==========================================
// 25. 🆕 サムライAI企画パートナー用 プリセット＆ダイアログ
// ==========================================
function setAIPrompt(type) {
    const input = document.getElementById('main-ai-chat-input');
    if (!input) return;
    
    let prompt = '';
    if (type === 'dm') {
        prompt = 'インスタDMで旅行好きの外国人ユーザーに、私たちのオーダーメイド旅行プラン作成サービス『ナビサムライ』をアピールする、親しみやすく魅力的な初回メッセージ案を考えてください。';
    } else if (type === 'plan') {
        prompt = '「20代のカップルで、日本の京都と金沢を5日間の日程で旅行したい。アクティブに楽しみたいが、予算は標準的。」というお客様向けの、ナビサムライ流のオリジナル旅行プラン構成案を作成してください。';
    } else if (type === 'biz') {
        prompt = 'ナビサムライ（煌記：事業開発/システム、和弥：営業/マーケ）の共同創業チームとして、今月の売上目標8万円を達成するための、SNSを活用した最新のマーケティング施策と実務アクションプランを提案してください。';
    }
    
    input.value = prompt;
    input.focus();
}

function renderAIChat() {
    const chatLog = document.getElementById('ai-chat-log');
    if (!chatLog) return;
    
    const keyStatus = document.getElementById('ai-key-status');
    const geminiKey = state.settings.geminiApiKey || state.geminiApiKey || '';
    
    if (keyStatus) {
        if (geminiKey) {
            keyStatus.innerHTML = `✅ APIキー設定済 (Geminiクラウド同期中)`;
            keyStatus.style.background = 'rgba(16, 185, 129, 0.1)';
            keyStatus.style.color = '#34d399';
            keyStatus.style.borderColor = 'rgba(16, 185, 129, 0.2)';
        } else {
            keyStatus.innerHTML = `❌ APIキー未設定 (デモモード実行中)`;
            keyStatus.style.background = 'rgba(239, 68, 68, 0.1)';
            keyStatus.style.color = '#f87171';
            keyStatus.style.borderColor = 'rgba(239, 68, 68, 0.2)';
        }
    }
    
    chatLog.innerHTML = `
        <div class="chat-msg ai" style="display: flex; gap: 10px; align-items: start;">
            <div class="chat-avatar" style="width: 32px; height: 32px; background: var(--color-primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; flex-shrink: 0;">
                <i data-lucide="bot" style="width: 16px; height: 16px;"></i>
            </div>
            <div class="chat-bubble" style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); color: var(--text-main); padding: 12px 16px; border-radius: 0 12px 12px 12px; font-size: 13.5px; line-height: 1.6; max-width: 80%; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                <p style="margin: 0; font-weight: 800; color: var(--color-primary); margin-bottom: 6px; font-size: 13.8px;">⚔️ ナビサムライ 共同創業AIパートナー</p>
                <p style="margin: 0;">お疲れ様です！『ナビサムライ』企画パートナーAIです。お二人の事業戦略、アプローチDM文面、顧客への提案旅行プラン作成など、何でも壁打ちしてください！下のボタンからアプローチ用テンプレートや企画プロンプトを瞬時にセットできます。</p>
            </div>
        </div>
    `;
    
    const history = state.aiChatHistory || [];
    history.forEach(msg => {
        const bubble = document.createElement('div');
        const isUser = msg.role === 'user';
        
        bubble.className = isUser ? 'chat-msg user' : 'chat-msg ai';
        bubble.style.display = 'flex';
        bubble.style.gap = '10px';
        bubble.style.maxWidth = '85%';
        bubble.style.alignSelf = isUser ? 'flex-end' : 'flex-start';
        if (isUser) {
            bubble.style.flexDirection = 'row-reverse';
            bubble.innerHTML = `
                <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--color-pink); color: white; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; flex-shrink: 0;">ME</div>
                <div style="background: linear-gradient(135deg, var(--color-primary), #6366f1); color: #ffffff; border: none; border-radius: 12px 0 12px 12px; padding: 10px 14px; font-size: 12.8px; line-height: 1.5; font-weight: 500; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2); word-break: break-all;">
                    ${msg.text}
                </div>
            `;
        } else {
            bubble.innerHTML = `
                <div class="chat-avatar" style="width: 32px; height: 32px; background: var(--color-primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; flex-shrink: 0;">
                    <i data-lucide="bot" style="width: 16px; height: 16px;"></i>
                </div>
                <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); color: var(--text-main); padding: 12px 16px; border-radius: 0 12px 12px 12px; font-size: 13.2px; line-height: 1.55; white-space: pre-wrap; word-break: break-all; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">${msg.text}</div>
            `;
        }
        chatLog.appendChild(bubble);
    });
    
    chatLog.scrollTop = chatLog.scrollHeight;
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

async function handleSendAIChat() {
    const input = document.getElementById('main-ai-chat-input');
    const chatLog = document.getElementById('ai-chat-log');
    
    if (!input || !chatLog) return;
    
    const text = input.value.trim();
    if (!text) return;
    
    if (!state.aiChatHistory) state.aiChatHistory = [];
    
    // ユーザーメッセージを追加
    state.aiChatHistory.push({
        id: 'ai-msg-' + Date.now() + '-u',
        role: 'user',
        text: text,
        timestamp: Date.now()
    });
    
    input.value = '';
    renderAIChat();
    
    // 光るスケルトンローダー（glassmorphism skeleton）の表示
    const skeleton = document.createElement('div');
    skeleton.className = 'chat-msg ai skeleton-msg';
    skeleton.style.display = 'flex';
    skeleton.style.gap = '10px';
    skeleton.style.maxWidth = '85%';
    skeleton.style.alignSelf = 'flex-start';
    skeleton.innerHTML = `
        <div class="chat-avatar" style="width: 32px; height: 32px; background: var(--color-primary); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; flex-shrink: 0;">
            <i data-lucide="bot" style="width: 16px; height: 16px;"></i>
        </div>
        <div class="chat-bubble skeleton-card" style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); padding: 14px; border-radius: 0 12px 12px 12px; width: 300px; display: flex; flex-direction: column; gap: 8px;">
            <div class="skeleton-line" style="width: 80%; height: 12px; background: rgba(255,255,255,0.06); border-radius: 4px;"></div>
            <div class="skeleton-line" style="width: 95%; height: 12px; background: rgba(255,255,255,0.06); border-radius: 4px;"></div>
            <div class="skeleton-line" style="width: 60%; height: 12px; background: rgba(255,255,255,0.06); border-radius: 4px;"></div>
        </div>
    `;
    chatLog.appendChild(skeleton);
    chatLog.scrollTop = chatLog.scrollHeight;
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    let reply = '';
    const geminiKey = state.settings.geminiApiKey || state.geminiApiKey || '';
    
    const systemPrompt = `You are "Navi Samurai AI" (ナビサムライAI), an elite startup co-pilot and business strategist for "Navi Samurai" (ナビサムライ), a premium travel planning service founded by Kouki (煌記) and Kazuya (和弥).
Navi Samurai is built on Vanilla HTML/CSS/JS and aims to wow international visitors with bespoke, high-end travel plans in Japan, easing their stress and making their pre-trip preparation highly exciting.
Kouki (煌記) is in charge of product development, system development, and UI/UX design.
Kazuya (和弥) is in charge of sales, marketing, and client relationships.
Provide highly customized, motivating, smart, and direct advice. Structure your response in clean, beautiful Japanese using markdown bullets and glowing terms. Offer ideas specifically relevant to their roles to accelerate their work!`;

    const prompt = `${systemPrompt}\n\n質問・壁打ち内容: ${text}`;
    
    if (geminiKey) {
        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: prompt }]
                    }]
                })
            });
            if (response.ok) {
                const resData = await response.json();
                if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
                    reply = resData.candidates[0].content.parts[0].text;
                } else {
                    throw new Error('Unexpected API structure');
                }
            } else {
                const errorData = await response.json();
                reply = `⚠️ Gemini APIエラーが発生しました。設定メニューからAPIキーを確認してください。\nエラー: ${errorData.error ? errorData.error.message : 'API呼び出しの失敗'}`;
            }
        } catch (err) {
            console.error('Gemini API fetch error:', err);
            reply = `⚠️ AI接続エラーが発生しました。しばらく待ってから再度お試しください。\nエラー: ${err.message}`;
        }
    } else {
        // デモ用模擬アドバイス
        await new Promise(resolve => setTimeout(resolve, 1500));
        reply = getLocalMockupReply(text);
    }
    
    // スケルトン削除
    if (skeleton.parentElement) {
        skeleton.remove();
    }
    
    state.aiChatHistory.push({
        id: 'ai-msg-' + Date.now() + '-m',
        role: 'model',
        text: reply,
        timestamp: Date.now()
    });
    
    saveState();
    renderAIChat();
}

function initAIChatTabEvents() {
    const sendBtn = document.getElementById('btn-main-send-ai-chat');
    const input = document.getElementById('main-ai-chat-input');
    const clearBtn = document.getElementById('btn-clear-ai-history');
    
    if (sendBtn && input) {
        sendBtn.addEventListener('click', handleSendAIChat);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                handleSendAIChat();
            }
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('AIとの対話履歴を完全にクリアしますか？')) {
                state.aiChatHistory = [];
                saveState();
                renderAIChat();
                showToast('チャット履歴をクリアしました！');
            }
        });
    }
}

window.setAIPrompt = setAIPrompt;
window.renderAIChat = renderAIChat;
window.handleSendAIChat = handleSendAIChat;
window.initAIChatTabEvents = initAIChatTabEvents;
