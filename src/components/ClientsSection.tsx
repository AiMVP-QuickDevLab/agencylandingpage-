@@ .. @@
         {/* Infinite Marquee */}
         <div className="relative">
-          <div className="flex overflow-hidden">
-            <div className="flex animate-marquee whitespace-nowrap">
+          <div className="flex overflow-hidden mask-gradient">
+            <div className="flex animate-marquee whitespace-nowrap min-w-full">
               {clients.map((client, index) => (
                 <div key={index} className="mx-8 flex items-center">
                   <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-4 flex items-center space-x-3 min-w-[180px]">
@@ -42,7 +42,7 @@
                 </div>
               ))}
             </div>
-            <div className="flex animate-marquee2 whitespace-nowrap absolute top-0">
+            <div className="flex animate-marquee2 whitespace-nowrap absolute top-0 min-w-full">
               {clients.map((client, index) => (
                 <div key={index} className="mx-8 flex items-center">
                   <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-4 flex items-center space-x-3 min-w-[180px]">
@@ -54,6 +54,13 @@
                 </div>
               ))}
             </div>
+            <div className="flex animate-marquee whitespace-nowrap absolute top-0 min-w-full" style={{animationDelay: '-12.5s'}}>
+              {clients.map((client, index) => (
+                <div key={`third-${index}`} className="mx-8 flex items-center">
+                  <div className="glass-effect bg-white/5 border border-white/10 rounded-xl p-4 flex items-center space-x-3 min-w-[180px]">
+                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
+                      <i className={`${client.icon} text-purple-400 text-lg`}></i>
+                    </div>
+                    <span className="text-white/80 font-medium">{client.name}</span>
+                  </div>
+                </div>
+              ))}
+            </div>
           </div>
         </div>
       </div>