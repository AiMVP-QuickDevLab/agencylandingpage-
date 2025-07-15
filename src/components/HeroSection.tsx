@@ .. @@
           {/* Right Content - Enhanced Floating Cards */}
-          <div className="relative h-[500px] flex items-center justify-center hidden lg:block">
+          <div className="relative h-[500px] flex items-center justify-center hidden lg:flex">
             {/* Main glass card */}
-            <div className="card-base glass-effect w-80 h-80 absolute transform rotate-6 floating-delay">
+            <div className="card-base glass-effect w-80 h-80 absolute transform rotate-6 floating-delay z-10">
               <div className="flex flex-col h-full">
                 <div className="flex items-center mb-4">
                   <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
-                    <i className="fas fa-code text-purple-400 text-sm"></i>
+                    <i className="fas fa-brain text-purple-400 text-sm"></i>
                   </div>
-                  <span className="ml-3 text-foreground text-lg">AI Development</span>
+                  <span className="ml-3 text-foreground text-lg">Neural Network</span>
                 </div>
                 <div className="flex-1 bg-white/5 rounded-lg p-4 flex items-center justify-center">
                   <div className="w-full h-full bg-gradient-to-br from-purple-500/10 via-purple-600/20 to-purple-500/10 rounded-md flex items-center justify-center">
-                    <i className="fas fa-laptop-code text-4xl text-purple-400/70"></i>
+                    <div className="relative">
+                      <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
+                        <i className="fas fa-brain text-2xl text-purple-400"></i>
+                      </div>
+                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
+                    </div>
                   </div>
                 </div>
                 <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
-                  <div className="h-full w-4/5 bg-purple-500 rounded-full"></div>
+                  <div className="h-full w-4/5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                 </div>
-                <div className="mt-2 text-xs text-muted-foreground text-right">Progress: 85%</div>
+                <div className="mt-2 text-xs text-muted-foreground text-right">Processing: 85%</div>
               </div>
             </div>
             
             {/* Secondary glass cards */}
-            <div className="card-base glass-effect w-64 h-44 absolute -bottom-4 -left-4 transform -rotate-12 floating">
+            <div className="card-base glass-effect w-64 h-44 absolute -bottom-4 -left-4 transform -rotate-12 floating z-20">
               <div className="flex justify-between items-center mb-3">
-                <span className="text-foreground text-sm">Client Satisfaction</span>
-                <i className="fas fa-star text-yellow-400 text-xs"></i>
+                <span className="text-foreground text-sm">AI Accuracy</span>
+                <i className="fas fa-chart-line text-green-400 text-xs"></i>
               </div>
-              <div className="text-3xl text-foreground font-bold mb-2">100%</div>
-              <div className="text-xs text-muted-foreground">Based on 30+ reviews</div>
+              <div className="text-3xl text-foreground font-bold mb-2">94.2%</div>
+              <div className="text-xs text-muted-foreground">Real-time analysis</div>
               <div className="flex mt-3 gap-1">
-                {[...Array(5)].map((_, i) => (
-                  <i key={i} className="fas fa-star text-yellow-400 text-xs"></i>
+                {[...Array(4)].map((_, i) => (
+                  <div key={i} className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                 ))}
               </div>
             </div>
             
-            <div className="card-base glass-effect w-48 h-48 absolute top-0 right-0 transform rotate-12 floating">
+            <div className="card-base glass-effect w-48 h-48 absolute top-0 right-0 transform rotate-12 floating z-30">
               <div className="h-full flex flex-col">
-                <div className="text-foreground text-sm mb-2">Technologies</div>
+                <div className="text-foreground text-sm mb-2">Neural Layers</div>
                 <div className="flex-1 flex flex-wrap gap-2 items-start">
-                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">React</span>
-                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">Webflow</span>
-                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">Python</span>
-                  <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded">AWS</span>
-                  <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded">AI/ML</span>
-                  <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded">Docker</span>
+                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">Input</span>
+                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">Hidden</span>
+                  <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">Output</span>
+                  <span className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded">Conv</span>
+                  <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded">LSTM</span>
+                  <span className="px-2 py-1 bg-teal-500/20 text-teal-300 text-xs rounded">Dense</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 export default HeroSection;