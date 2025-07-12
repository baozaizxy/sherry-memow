'use client'
import React from 'react';
import Image from 'next/image';

const stack = [
  '/assets/stack/CSS3.svg',
  '/assets/stack/HTML.svg',
  '/assets/stack/JavaScript.svg',
  '/assets/stack/React.svg',
  '/assets/stack/NextJS.svg',
  '/assets/stack/VueJS.svg',
  '/assets/stack/NodeJS.svg',
  '/assets/stack/TypeScript.svg',
  '/assets/stack/TailwindCSS.svg',
  '/assets/stack/webpack.svg',
  '/assets/stack/Git.svg',
];

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 md:px-8 mt-[80px]">

      <div className="bg-black border border-gray-600 rounded-lg p-6 mb-8 font-mono">
        <div className="text-green-400 mb-4">
          <span className="text-[var(--light)] text-2xl font-bold">Xinyue ZHENG</span> 
        </div>
        <div className="space-y-2 text-gray-300">
          <div className="font-semibold text-[var(--mid)]">
            email: <span className="text-sm">xinyue_zheng@outlook.com</span>
          </div>
          <div><span className="text-blue-400">github:</span>    <a href="https://github.com/baozaizxy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/baozaizxy</a></div>
          <div><span className="text-blue-400">location:</span>  Beijing, China</div>
          <div><span className="text-blue-400">role:</span>      Frontend / Fullstack Developer</div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-600 pb-2">
          <span className="text-green-400">#</span> EDUCATION
        </h2>
        <div className="bg-[#3C3C3C] rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-4">
            <img src="/assets/school/UNSW.png" alt="unsw" className="h-12 w-12 object-contain rounded" />
            <div>
              <div className="font-semibold text-gray-100">
                新南威尔士大学 <span className="text-gray-400 text-sm">2024.8 – 2025.9</span>
              </div>
              <div className="text-gray-300 text-sm">硕士 · IT</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/assets/school/CHU.png" alt="chu" className="h-12 w-12 object-contain rounded" />
            <div>
              <div className="font-semibold text-gray-100">
                长安大学 <span className="text-gray-400 text-sm">2019.8 – 2023.7</span>
              </div>
              <div className="text-gray-300 text-sm">本科 · 软件工程</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-600 pb-2">
          <span className="text-green-400">#</span> STACK
        </h2>
        <div className="scrollContainer">
          <div className="scrollTrack">
            {[...stack, ...stack].map((src, i) => (
              <div className="imageWrapper" key={i}>
                <Image src={src} alt={`tech-${i}`} width={80} height={60} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 工作经验 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-600 pb-2">
          <span className="text-green-400">#</span> EXPERIENCE
        </h2>
        
        <div className="space-y-6">
          <div className="bg-[#3C3C3C] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              XX科技有限公司 | 前端开发工程师
            </h3>
            <p className="text-gray-400 text-sm mb-3">2021.06 – 2024.05, 上海</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                主导公司主站重构，采用 Next.js + TypeScript，提升开发效率与可维护性
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                实现 SSR/SSG，首页首屏加载时间优化至 &lt;1s
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                设计并实现前端自动化测试流程（Jest + React Testing Library）
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                技术栈：React, Next.js, TypeScript, Tailwind CSS, Docker, GitHub Actions
              </li>
            </ul>
          </div>

          <div className="bg-[#3C3C3C] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">
              YY数据科技 | Web开发实习生
            </h3>
            <p className="text-gray-400 text-sm mb-3">2020.03 – 2021.05, 远程</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                参与数据可视化平台开发，负责 ECharts 图表组件封装
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                优化前端打包体积，减少 30% 冗余依赖
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                技术栈：Vue.js, ECharts, Webpack, Node.js
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 项目经验 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-600 pb-2">
          <span className="text-green-400">#</span> PROJECT
        </h2>
        
        <div className="space-y-6">
          <div className="bg-[#3C3C3C] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">Markdown 博客系统</h3>
            <div className="space-y-2 text-gray-300">
              <p><span className="text-yellow-400">技术栈：</span>Next.js, React, Tailwind CSS, TypeScript, Node.js</p>
              <p><span className="text-yellow-400">部署：</span>Vercel + GitHub Actions 自动化部署</p>
              <p><span className="text-yellow-400">功能：</span>支持多级目录、分类筛选、Markdown 渲染、深色模式</p>
              <p><span className="text-yellow-400">优化：</span>静态生成（SSG），首屏加载 &lt;800ms，Lighthouse 评分 95+</p>
              <p><span className="text-yellow-400">仓库：</span>
                <a href="https://github.com/sherryzheng/markdown-blog" className="text-green-400 hover:underline">
                  github.com/sherryzheng/markdown-blog
                </a>
              </p>
            </div>
          </div>

          <div className="bg-[#3C3C3C] rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-3">DevOps 自动化脚本集</h3>
            <div className="space-y-2 text-gray-300">
              <p><span className="text-yellow-400">技术栈：</span>Shell, Python, Docker</p>
              <p><span className="text-yellow-400">功能：</span>一键部署前端/后端服务，自动化备份与日志归档</p>
              <p><span className="text-yellow-400">优化：</span>脚本覆盖 3+ 生产环境，减少 80% 人工运维操作</p>
            </div>
          </div>
        </div>
      </section>

      {/* 开源贡献 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-600 pb-2">
          <span className="text-green-400">#</span> 开源贡献
        </h2>
        
        <div className="space-y-4">
          <div className="bg-[#3C3C3C] rounded-lg p-4">
            <a href="https://github.com/streamich/react-use" className="text-green-400 hover:underline font-mono">
              react-use
            </a>
            <p className="text-gray-300 mt-1">提交 PR，修复 useInterval 类型推断问题</p>
          </div>
          
          <div className="bg-[#3C3C3C] rounded-lg p-4">
            <a href="https://github.com/ruanyf/awesome-cn-cv" className="text-green-400 hover:underline font-mono">
              awesome-cn-cv
            </a>
            <p className="text-gray-300 mt-1">收录并维护部分中文简历模板</p>
          </div>
          
          <div className="bg-[#3C3C3C] rounded-lg p-4">
            <a href="https://github.com/sherryzheng" className="text-green-400 hover:underline font-mono">
              个人开源项目
            </a>
            <p className="text-gray-300 mt-1">持续维护博客系统、自动化脚本等项目</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Profile;
  