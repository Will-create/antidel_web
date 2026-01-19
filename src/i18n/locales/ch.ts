export default {
  translation: {
    hero: {
      title: 'Antidel',
      subtitle: '恢复已删除的消息，重新掌控对话。',
      phrases: [
        '删除？不再是问题。',
        '图片？已恢复。',
        '消息？已保存。',
        '效率神器。'
      ],
      discoverFeatures: '探索功能'
    },
    features: {
      title: '功能亮点',
      items: {
        realtime: {
          title: '实时恢复',
          description: '即时检测并恢复被删除的消息。'
        },
        media: {
          title: '媒体预览',
          description: '即使图片和视频已被删除，也能查看。'
        },
        notifications: {
          title: '智能通知',
          description: '有人删除聊天消息时立即通知你。'
        },
        privacy: {
          title: '百分百隐私保护',
          description: '所有数据仅保存在您的设备中，绝不上传至云端。'
        }
      }
    },
    howItWorks: {
      title: '使用方法',
      steps: {
        step1: {
          title: '输入手机号',
          description: '输入与你的 WhatsApp 绑定的手机号以开始连接流程。'
        },
        step2: {
          title: '接收连接验证码',
          description: '通过 WhatsApp 消息接收唯一验证码以验证身份。'
        },
        step3: {
          title: '连接设备',
          description: '在 Antidel 中输入验证码，与 WhatsApp 安全连接。'
        },
        step4: {
          title: '开始恢复',
          description: 'Antidel 将开始实时追踪并恢复被删除的消息。'
        }
      }
    },
    updates: {
      title: '更新内容',
      newFeatures: '新增功能',
      fixes: '修复与优化',
      versions: {
        v2_1_0: {
          features: [
            "新增语音消息恢复功能",
            "增强通知稳定性",
            "优化界面，支持暗黑模式 2.0"
          ],
          fixes: [
            "修复低内存设备偶发崩溃问题",
            "优化电池使用效率"
          ]
        },
        v2_0_0: {
          features: [
            "全新界面设计",
            "新增群聊监控支持",
            "新增已恢复内容媒体库"
          ],
          fixes: [
            "修复与 WhatsApp 23.5.82 的兼容性问题",
            "启动速度提升 40%"
          ]
        },
        v1_5_2: {
          features: [
            "新增状态更新恢复功能",
            "新增重要恢复内容归档功能"
          ],
          fixes: [
            "修复部分设备上通知延迟问题",
            "提升连接稳定性"
          ]
        }
      }
    },
    testimonials: {
      title: '用户体验',
      items: {
        alex: {
          name: "Alex K.",
          role: "测试用户",
          quote: "Antidel 拯救了原本可能永远丢失的重要信息。"
        },
        mia: {
          name: "Mia J.",
          role: "早期使用者",
          quote: "一开始我持怀疑态度，但 Antidel 实现了它的承诺。"
        },
        david: {
          name: "David T.",
          role: "科技爱好者",
          quote: "有人删除消息时的实时通知，真的改变了游戏规则。"
        }
      }
    },
    faq: {
      title: '常见问题',
      items: {
        safety: {
          question: "Antidel 使用安全吗？",
          answer: "非常安全。Antidel 不会干扰 WhatsApp 核心功能，仅作为通知的被动观察者运行。"
        },
        availability: {
          question: "Antidel 支持 iPhone 吗？",
          answer: "支持！Antidel 可用于 Android 和 iOS 设备。"
        },
        privacy: {
          question: "Antidel 会保存我的消息吗？",
          answer: "Antidel 仅在本地设备上保存已删除的消息，绝不上传至服务器或云端。"
        },
        compatibility: {
          question: "Antidel 能支持最新版本的 WhatsApp 吗？",
          answer: "当然，我们会定期更新以确保与最新 WhatsApp 兼容。"
        },
        limits: {
          question: "有没有什么限制？",
          answer: "Antidel 只能恢复安装后收到并在应用运行时被删除的消息，安装前的消息无法恢复。"
        }
      }
    },
    footer: {
      about: '关于我们',
      features: '功能亮点',
      legal: '法律条款',
      copyright: '© {{year}} Antidel。保留所有权利。',
      version: 'Antidel v{{version}} – 更新于 {{date}}',
      branding: {
        description: '一款恢复已删除 WhatsApp 消息和媒体的终极工具，掌控你的聊天记录。'
      },
      links: {
        company: '公司',
        team: '团队',
        pressKit: '媒体包',
        messageRecovery: '消息恢复',
        mediaPreview: '媒体预览',
        notifications: '通知功能',
        privacyPolicy: '隐私政策',
        termsOfUse: '使用条款',
        eula: '最终用户许可协议'
      },
      social: {
        twitter: '推特',
        github: 'GitHub',
        whatsapp: 'WhatsApp'
      },
      downloadNow: '立即下载'
    },
    download: {
      button: '下载',
      android: '下载 Android 版',
      ios: '下载 iOS 版',
      generic: '下载 Antidel',
      error: '本应用仅适用于 Android 和 iOS 移动设备。'
    }
  }
};
