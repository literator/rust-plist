(function() {var implementors = {};
implementors['xml'] = ["impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='xml/namespace/struct.NamespaceMappings.html' title='xml::namespace::NamespaceMappings'>NamespaceMappings</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='xml/namespace/struct.NamespaceStackMappings.html' title='xml::namespace::NamespaceStackMappings'>NamespaceStackMappings</a>&lt;'a&gt;","impl&lt;'a, B: <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='xml/reader/struct.Events.html' title='xml::reader::Events'>Events</a>&lt;'a, B&gt;","impl&lt;I, RK, RV, K, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='xml/util/struct.ClonedPairwise.html' title='xml::util::ClonedPairwise'>ClonedPairwise</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;Item=<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(RK, RV)</a>&gt;, RK: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Deref.html' title='core::ops::Deref'>Deref</a>&lt;Target=K&gt;, RV: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Deref.html' title='core::ops::Deref'>Deref</a>&lt;Target=V&gt;, K: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, V: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>",];implementors['rand'] = ["impl&lt;'a, T: <a class='trait' href='rand/trait.Rand.html' title='rand::Rand'>Rand</a>, R: <a class='trait' href='rand/trait.Rng.html' title='rand::Rng'>Rng</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='rand/struct.Generator.html' title='rand::Generator'>Generator</a>&lt;'a, T, R&gt;","impl&lt;'a, R: <a class='trait' href='rand/trait.Rng.html' title='rand::Rng'>Rng</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='rand/struct.AsciiGenerator.html' title='rand::AsciiGenerator'>AsciiGenerator</a>&lt;'a, R&gt;",];implementors['rustc_serialize'] = ["impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>&lt;Item=<a href='http://doc.rust-lang.org/nightly/std/primitive.char.html'>char</a>&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='rustc_serialize/json/struct.Parser.html' title='rustc_serialize::json::Parser'>Parser</a>&lt;T&gt;",];implementors['num'] = ["impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='num/iter/struct.Range.html' title='num::iter::Range'>Range</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Add.html' title='core::ops::Add'>Add</a>&lt;A, Output=A&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/traits/trait.ToPrimitive.html' title='num::traits::ToPrimitive'>ToPrimitive</a></span>","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='num/iter/struct.RangeInclusive.html' title='num::iter::RangeInclusive'>RangeInclusive</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Add.html' title='core::ops::Add'>Add</a>&lt;A, Output=A&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/traits/trait.ToPrimitive.html' title='num::traits::ToPrimitive'>ToPrimitive</a></span>","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='num/iter/struct.RangeStep.html' title='num::iter::RangeStep'>RangeStep</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='num/traits/trait.CheckedAdd.html' title='num::traits::CheckedAdd'>CheckedAdd</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='num/iter/struct.RangeStepInclusive.html' title='num::iter::RangeStepInclusive'>RangeStepInclusive</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='num/traits/trait.CheckedAdd.html' title='num::traits::CheckedAdd'>CheckedAdd</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html' title='core::cmp::PartialEq'>PartialEq</a></span>",];implementors['chrono'] = ["impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='chrono/format/strftime/struct.StrftimeItems.html' title='chrono::format::strftime::StrftimeItems'>StrftimeItems</a>&lt;'a&gt;",];implementors['plist'] = ["impl&lt;R: <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Seek.html' title='std::io::Seek'>Seek</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='plist/binary/struct.StreamingParser.html' title='plist::binary::StreamingParser'>StreamingParser</a>&lt;R&gt;","impl&lt;R: <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='struct' href='plist/xml/struct.StreamingParser.html' title='plist::xml::StreamingParser'>StreamingParser</a>&lt;R&gt;","impl&lt;R: <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Seek.html' title='std::io::Seek'>Seek</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a> for <a class='enum' href='plist/enum.StreamingParser.html' title='plist::StreamingParser'>StreamingParser</a>&lt;R&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
